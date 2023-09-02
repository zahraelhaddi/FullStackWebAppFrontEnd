import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrAvailableCarsComponent } from './nbr-available-cars.component';

describe('NbrAvailableCarsComponent', () => {
  let component: NbrAvailableCarsComponent;
  let fixture: ComponentFixture<NbrAvailableCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NbrAvailableCarsComponent]
    });
    fixture = TestBed.createComponent(NbrAvailableCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
