import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UssainBoltAppComponent } from './ussain-bolt-app.component';

describe('UssainBoltAppComponent', () => {
  let component: UssainBoltAppComponent;
  let fixture: ComponentFixture<UssainBoltAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UssainBoltAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UssainBoltAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
