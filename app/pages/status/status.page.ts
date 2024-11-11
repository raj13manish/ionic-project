import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage {
  lectures = [
    { title: 'Lecture 1', description: 'Introduction', progress: 100, status: 'completed' },
    { title: 'Lecture 2', description: 'Chapter 1', progress: 75, status: 'in-progress' },
    { title: 'Lecture 3', description: 'Chapter 2', progress: 0, status: 'not-started' },
    // Add more lectures as needed
  ];

  getStatusIcon(status: string): string {
    switch (status) {
      case 'completed':
        return 'checkmark-circle';
      case 'in-progress':
        return 'play-circle';
      case 'not-started':
        return 'ellipse-outline';
      default:
        return 'ellipse-outline';
    }
  }
}
