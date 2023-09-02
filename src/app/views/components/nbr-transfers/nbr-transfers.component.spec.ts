import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrTransfersComponent } from './nbr-transfers.component';

describe('NbrTransfersComponent', () => {
  let component: NbrTransfersComponent;
  let fixture: ComponentFixture<NbrTransfersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NbrTransfersComponent]
    });
    fixture = TestBed.createComponent(NbrTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
