import { Component } from '@angular/core';

@Component({
  selector: 'app-rankers',
  templateUrl: './rankers.page.html',
  styleUrls: ['./rankers.page.scss'],
})
export class RankersPage {
  students = [
    { name: 'Student 1', rank: 1, image: 'https://i.pinimg.com/564x/eb/dc/e2/ebdce2ca4656096eed24a7979f2e0c3c.jpg' },
    { name: 'Student 2', rank: 2, image: 'https://i.pinimg.com/236x/95/47/cf/9547cfaaa48af08d01cfe1f417913488.jpg' },
    { name: 'Student 3', rank: 3, image: 'https://img.freepik.com/premium-photo/formal-female_929505-4338.jpg?w=740' },
    { name: 'Student 4', rank: 4, image: 'https://i.pinimg.com/564x/56/ea/43/56ea4381a91e26bae6336b2f8ec75bcd.jpg' },
    { name: 'Student 5', rank: 5, image: 'https://img.freepik.com/premium-photo/formal-girl_1003030-19985.jpg' }
  ];
}
