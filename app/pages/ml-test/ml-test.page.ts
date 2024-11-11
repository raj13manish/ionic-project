import { Component } from '@angular/core';

@Component({
  selector: 'app-ml-test',
  templateUrl: './ml-test.page.html',
  styleUrls: ['./ml-test.page.scss'],
})
export class MlTestPage {
  testStarted = false;
  testSubmitted = false;
  timer: any;
  timeLimit = 360; // 6 minutes in seconds
  minutes: number = 6;
  seconds: number = 0;
  score: number = 0;

  // Sample questions for the ML Test with correct answers
  questions = [
    {
      text: 'What does ML stand for?',
      options: ['Machine Learning', 'Model Learning', 'Main Learning', 'Meta Learning'],
      correctAnswer: 'Machine Learning',
      selectedAnswer: null,
    },
    {
      text: 'Which of the following is an example of supervised learning?',
      options: ['Classification', 'Clustering', 'Dimensionality Reduction', 'Anomaly Detection'],
      correctAnswer: 'Classification',
      selectedAnswer: null,
    },
    {
      text: 'Which algorithm is most commonly used for regression tasks?',
      options: ['Linear Regression', 'K-Means', 'Support Vector Machine', 'Decision Trees'],
      correctAnswer: 'Linear Regression',
      selectedAnswer: null,
    },
    {
      text: 'What is the purpose of the "training" phase in machine learning?',
      options: ['To test the model', 'To improve model performance', 'To adjust model parameters', 'To deploy the model'],
      correctAnswer: 'To adjust model parameters',
      selectedAnswer: null,
    },
    {
      text: 'Which of the following is an unsupervised learning algorithm?',
      options: ['K-Means', 'Logistic Regression', 'Naive Bayes', 'Random Forest'],
      correctAnswer: 'K-Means',
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
