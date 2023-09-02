import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrCarsComponent } from './nbr-cars.component';

describe('NbrCarsComponent', () => {
  let component: NbrCarsComponent;
  let fixture: ComponentFixture<NbrCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NbrCarsComponent]
    });
    fixture = TestBed.createComponent(NbrCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
