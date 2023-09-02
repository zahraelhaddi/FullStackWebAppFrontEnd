import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrAgenciesComponent } from './nbr-agencies.component';

describe('NbrAgenciesComponent', () => {
  let component: NbrAgenciesComponent;
  let fixture: ComponentFixture<NbrAgenciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NbrAgenciesComponent]
    });
    fixture = TestBed.createComponent(NbrAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
