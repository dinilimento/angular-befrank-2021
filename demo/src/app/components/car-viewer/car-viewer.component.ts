import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-car-viewer',
  templateUrl: './car-viewer.component.html',
  styleUrls: ['./car-viewer.component.css'],

  // extreme aanpak: dit overal toepassen
  changeDetection: ChangeDetectionStrategy.OnPush, // performance
})
export class CarViewerComponent implements OnInit, DoCheck {
  @Input() cars!: any[];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cars[1].make += 'qutest';

    // setInterval(() => {
    //   this.cars[2].make += 'w';

    // }, 1000);

    // this.observable.subscribe(() => {
    //   this.cdr.markForCheck();
    // });
  }

  ngDoCheck(): void {
    console.log('[carview] doCheck');

    if (this.cars.length % 5 === 0) {
      this.cdr.markForCheck(); // eenmalig meedoen met change detection cycle
    }
  }

  getTextToDisplay(car: any) {
    // car.make += 'whoa';
    return `${car.make} ${car.model}`;
 }

 addCar() {
   this.cars.push({ make: 'Haha', model: 'Oei' });
 }
}
