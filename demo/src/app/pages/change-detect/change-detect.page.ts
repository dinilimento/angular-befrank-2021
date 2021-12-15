import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detect',
  templateUrl: './change-detect.page.html',
  styleUrls: ['./change-detect.page.css'],
})
export class ChangeDetectPage implements OnInit {
  name = 'JP';

  config = {
    name: 'config JP',
  };

  cars = [
    { make: 'Opel', model: 'Astra' },
    { make: 'Thinga', model: 'Majig' },
    { make: 'Whatya', model: 'Macallit' },
  ];

  ngOnInit() {
    setTimeout(() => {
      this.name += 'iets anders';
    }, 2000);
  }

  addCar() {
    this.cars.push({
      make: 'Renault',
      model: 'Megane',
    });
  }

  move() {
    console.log('move');
  }
}
