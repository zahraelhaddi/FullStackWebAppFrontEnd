import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTransfersComponent } from './my-transfers.component';

describe('MyTransfersComponent', () => {
  let component: MyTransfersComponent;
  let fixture: ComponentFixture<MyTransfersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTransfersComponent]
    });
    fixture = TestBed.createComponent(MyTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
