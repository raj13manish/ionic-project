import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-test',
  templateUrl: './ai-test.page.html',
  styleUrls: ['./ai-test.page.scss'],
})
export class AiTestPage {
  testStarted = false;
  testSubmitted = false;
  timer: any;
  timeLimit = 360; // 6 minutes in seconds
  minutes: number = 6;
  seconds: number = 0;
  score: number = 0;

  // Sample questions for the AI Test with correct answers
  questions = [
    {
      text: 'What does AI stand for?',
      options: ['Artificial Intelligence', 'Automated Intelligence', 'Artificial Interface', 'Autonomous Intelligence'],
      correctAnswer: 'Artificial Intelligence',
      selectedAnswer: null,
    },
    {
      text: 'Which of the following is a type of machine learning?',
      options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'All of the above'],
      correctAnswer: 'All of the above',
      selectedAnswer: null,
    },
    {
      text: 'What is the primary goal of Natural Language Processing (NLP)?',
      options: ['To analyze and generate human language', 'To process data quickly', 'To classify images', 'To play games'],
      correctAnswer: 'To analyze and generate human language',
      selectedAnswer: null,
    },
    {
      text: 'Which algorithm is commonly used for training a neural network?',
      options: ['Backpropagation', 'K-Means', 'Decision Trees', 'Linear Regression'],
      correctAnswer: 'Backpropagation',
      selectedAnswer: null,
    },
    {
      text: 'What is deep learning?',
      options: ['A subset of machine learning', 'A form of supervised learning', 'A type of reinforcement learning', 'None of the above'],
      correctAnswer: 'A subset of machine learning',
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
