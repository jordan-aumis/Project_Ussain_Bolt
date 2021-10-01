import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UssainBoltAppGymCardComponent } from './ussain-bolt-app-gym-card.component';

describe('UssainBoltAppGymCardComponent', () => {
  let component: UssainBoltAppGymCardComponent;
  let fixture: ComponentFixture<UssainBoltAppGymCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UssainBoltAppGymCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UssainBoltAppGymCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
