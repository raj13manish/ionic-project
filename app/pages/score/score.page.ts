import { Component } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss']
})
export class ScorePage {
  overallScore = 69; // Example overall score
  subjects = [
    { name: 'Cyber Security', score: 67 },
    { name: 'Web Development', score: 61 },
    { name: 'Data Science', score: 73 },
    { name: 'Machine Learning', score: 74 },
    { name: 'Artificial Intelligence', score: 80 }
  ];
}
