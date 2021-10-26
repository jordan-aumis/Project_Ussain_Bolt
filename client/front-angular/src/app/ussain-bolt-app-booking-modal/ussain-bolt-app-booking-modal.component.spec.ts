import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UssainBoltAppBookingModalComponent } from './ussain-bolt-app-booking-modal.component';

describe('UssainBoltAppBookingModalComponent', () => {
  let component: UssainBoltAppBookingModalComponent;
  let fixture: ComponentFixture<UssainBoltAppBookingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UssainBoltAppBookingModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UssainBoltAppBookingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
