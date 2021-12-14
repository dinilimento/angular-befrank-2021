import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePage } from './observable.page';

describe('ObservablePage', () => {
  let component: ObservablePage;
  let fixture: ComponentFixture<ObservablePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
