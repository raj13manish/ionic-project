import { Component } from '@angular/core';

@Component({
  selector: 'app-data-science-test',
  templateUrl: './data-science-test.page.html',
  styleUrls: ['./data-science-test.page.scss'],
})
export class DataScienceTestPage {
  testStarted = false;
  testSubmitted = false;
  timer: any;
  timeLimit = 360; // 6 minutes in seconds
  minutes: number = 6;
  seconds: number = 0;
  score: number = 0;

  // Sample questions for the Data Science Test with correct answers
  questions = [
    {
      text: 'What does the term "Data Science" refer to?',
      options: ['Data collection', 'Data cleaning', 'A combination of statistics, data analysis, and machine learning', 'Data visualization'],
      correctAnswer: 'A combination of statistics, data analysis, and machine learning',
      selectedAnswer: null,
    },
    {
      text: 'Which of the following is an example of unsupervised learning?',
      options: ['K-Means Clustering', 'Linear Regression', 'Logistic Regression', 'Decision Trees'],
      correctAnswer: 'K-Means Clustering',
      selectedAnswer: null,
    },
    {
      text: 'Which Python library is commonly used for data manipulation?',
      options: ['TensorFlow', 'NumPy', 'Matplotlib', 'OpenCV'],
      correctAnswer: 'NumPy',
      selectedAnswer: null,
    },
    {
      text: 'What is the purpose of data normalization?',
      options: ['To reduce the number of features', 'To make the data fit within a specific range', 'To identify missing values', 'To visualize data'],
      correctAnswer: 'To make the data fit within a specific range',
      selectedAnswer: null,
    },
    {
      text: 'What is a "confusion matrix" used for in machine learning?',
      options: ['Evaluating model accuracy', 'Visualizing the data', 'Summarizing classification results', 'Testing for bias'],
      correctAnswer: 'Summarizing classification results',
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
