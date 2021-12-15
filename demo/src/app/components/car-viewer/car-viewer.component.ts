import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-viewer',
  templateUrl: './car-viewer.component.html',
  styleUrls: ['./car-viewer.component.css'],
})
export class CarViewerComponent implements OnInit {
  @Input() cars!: any[];

  ngOnInit(): void {
    this.cars[1].make += 'qutest';

    // setInterval(() => {
    //   this.cars[2].make += 'w';

    // }, 1000);
  }

  getTextToDisplay(car: any) {
    // car.make += 'whoa';
    return `${car.make} ${car.model}`;
  }
}
