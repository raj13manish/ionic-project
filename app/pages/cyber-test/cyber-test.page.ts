import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cyber-test',
  templateUrl: './cyber-test.page.html',
  styleUrls: ['./cyber-test.page.scss'],
})
export class CyberTestPage {
  testStarted = false;
  testSubmitted = false;
  timer: any;
  timeLimit = 360; // 6 minutes in seconds
  minutes: number = 6;
  seconds: number = 0;
  score: number = 0;

  // Sample questions for the Cyber Test with correct answers
  questions = [
    {
      text: 'What does VPN stand for?',
      options: ['Virtual Private Network', 'Virtual Public Network', 'Visual Private Network', 'Virtual Protection Network'],
      correctAnswer: 'Virtual Private Network',
      selectedAnswer: null,
    },
    {
      text: 'Which is a strong password?',
      options: ['12345', 'password', 'P@ssw0rd123', 'abc123'],
      correctAnswer: 'P@ssw0rd123',
      selectedAnswer: null,
    },
    {
      text: 'Which of the following is a form of malware?',
      options: ['Spyware', 'Firewall', 'Antivirus', 'Encryption'],
      correctAnswer: 'Spyware',
      selectedAnswer: null,
    },
    {
      text: 'What does SSL stand for in web security?',
      options: ['Secure Socket Layer', 'Secure Service Layer', 'Single Security Layer', 'System Security Layer'],
      correctAnswer: 'Secure Socket Layer',
      selectedAnswer: null,
    },
    {
      text: 'What is phishing?',
      options: ['Sending malicious emails to steal personal data', 'Creating fake websites', 'Scanning networks for vulnerabilities', 'Encrypting data for protection'],
      correctAnswer: 'Sending malicious emails to steal personal data',
      selectedAnswer: null,
    },
  ];

  constructor(private navCtrl: NavController) {}

  startTest() {
    this.testStarted = true;
    this.testSubmitted = false;
    this.score = 0;
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.timeLimit--;
      this.minutes = Math.floor(this.timeLimit / 60);
      this.seconds = this.timeLimit % 60;

      if (this.timeLimit <= 0) {
        clearInterval(this.timer);
        this.submitTest();
      }
    }, 1000);
  }

  submitTest() {
    clearInterval(this.timer);
    this.score = this.questions.reduce((acc, question) => {
      return acc + (question.selectedAnswer === question.correctAnswer ? 1 : 0);
    }, 0);

    this.testStarted = false;
    this.testSubmitted = true;
  }

  goToHome() {
    this.navCtrl.navigateBack('/home'); // Adjust '/home' to your actual home route
  }
}
