import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarComponentComponent } from './add-car-component.component';

describe('AddCarComponentComponent', () => {
  let component: AddCarComponentComponent;
  let fixture: ComponentFixture<AddCarComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCarComponentComponent]
    });
    fixture = TestBed.createComponent(AddCarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
