import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrUnavailableCarsComponent } from './nbr-unavailable-cars.component';

describe('NbrUnavailableCarsComponent', () => {
  let component: NbrUnavailableCarsComponent;
  let fixture: ComponentFixture<NbrUnavailableCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NbrUnavailableCarsComponent]
    });
    fixture = TestBed.createComponent(NbrUnavailableCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
