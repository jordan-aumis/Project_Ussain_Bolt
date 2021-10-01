import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UssainBoltAppUserPageComponent } from './ussain-bolt-app-user-page.component';

describe('UssainBoltAppUserPageComponent', () => {
  let component: UssainBoltAppUserPageComponent;
  let fixture: ComponentFixture<UssainBoltAppUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UssainBoltAppUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UssainBoltAppUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
