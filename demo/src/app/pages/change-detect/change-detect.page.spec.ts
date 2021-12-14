import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectPage } from './change-detect.page';

describe('ChangeDetectPage', () => {
  let component: ChangeDetectPage;
  let fixture: ComponentFixture<ChangeDetectPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
