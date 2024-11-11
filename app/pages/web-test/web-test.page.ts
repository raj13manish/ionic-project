import { Component } from '@angular/core';

@Component({
  selector: 'app-web-test',
  templateUrl: './web-test.page.html',
  styleUrls: ['./web-test.page.scss'],
})
export class WebTestPage {
  testStarted = false;
  testSubmitted = false;
  timer: any;
  timeLimit = 360; // 6 minutes in seconds
  minutes: number = 6;
  seconds: number = 0;
  score: number = 0;

  // Sample questions for the test with correct answers
  questions = [
    {
      text: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyperlinking Tool Markup Language'],
      correctAnswer: 'Hyper Text Markup Language',
      selectedAnswer: null,
    },
    {
      text: 'Which tag is used to create a hyperlink in HTML?',
      options: ['<a>', '<link>', '<href>', '<anchor>'],
      correctAnswer: '<a>',
      selectedAnswer: null,
    },
    {
      text: 'Which CSS property controls the text size?',
      options: ['font-style', 'text-size', 'font-size', 'text-style'],
      correctAnswer: 'font-size',
      selectedAnswer: null,
    },
    {
      text: 'What is the correct HTML for adding a background color?',
      options: ['<background>yellow</background>', '<body bg="yellow">', '<body style="background-color: yellow;">', '<background-color="yellow">'],
      correctAnswer: '<body style="background-color: yellow;">',
      selectedAnswer: null,
    },
    {
      text: 'What is the correct CSS syntax for making all paragraphs bold?',
      options: ['<p style="bold">', 'p {text-weight: bold;}', 'p {font-weight: bold;}', '<p style="text-weight: bold;">'],
      correctAnswer: 'p {font-weight: bold;}',
      selectedAnswer: null,
    },
  ];

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
    // Stop the timer
    clearInterval(this.timer);

    // Calculate the score
    this.score = this.questions.reduce((acc, question) => {
      return acc + (question.selectedAnswer === question.correctAnswer ? 1 : 0);
    }, 0);

    // Show the score and hide the questions
    this.testStarted = false;
    this.testSubmitted = true;
  }
}
