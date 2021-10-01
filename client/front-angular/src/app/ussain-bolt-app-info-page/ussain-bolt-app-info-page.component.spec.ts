import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UssainBoltAppInfoPageComponent } from './ussain-bolt-app-info-page.component';

describe('UssainBoltAppInfoPageComponent', () => {
  let component: UssainBoltAppInfoPageComponent;
  let fixture: ComponentFixture<UssainBoltAppInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UssainBoltAppInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UssainBoltAppInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
