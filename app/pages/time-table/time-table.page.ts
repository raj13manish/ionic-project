import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.page.html',
  styleUrls: ['./time-table.page.scss'],
})
export class TimeTablePage implements OnInit {

  periods = [
    { time: '08:00 - 09:00', monday: 'Math', tuesday: 'English', wednesday: 'Physics', thursday: 'Biology', friday: 'Chemistry' },
    { time: '09:00 - 10:00', monday: 'English', tuesday: 'Math', wednesday: 'Chemistry', thursday: 'Physics', friday: 'Biology' },
    { time: '10:00 - 11:00', monday: 'Physics', tuesday: 'Biology', wednesday: 'Math', thursday: 'English', friday: 'Physics' },
    { time: '11:00 - 12:00', monday: 'Biology', tuesday: 'Chemistry', wednesday: 'English', thursday: 'Math', friday: 'English' },
    { time: '12:00 - 01:00', monday: 'Chemistry', tuesday: 'Physics', wednesday: 'Biology', thursday: 'Chemistry', friday: 'Math' },
    // Add more periods as needed
  ];

  constructor() { }

  ngOnInit() {
  }

}
