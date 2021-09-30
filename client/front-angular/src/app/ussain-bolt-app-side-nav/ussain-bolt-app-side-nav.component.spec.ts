import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UssainBoltAppSideNavComponent } from './ussain-bolt-app-side-nav.component';

describe('UssainBoltAppSideNavComponent', () => {
  let component: UssainBoltAppSideNavComponent;
  let fixture: ComponentFixture<UssainBoltAppSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UssainBoltAppSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UssainBoltAppSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
