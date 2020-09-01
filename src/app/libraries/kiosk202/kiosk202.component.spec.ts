import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk202Component } from './kiosk202.component';

describe('Kiosk202Component', () => {
  let component: Kiosk202Component;
  let fixture: ComponentFixture<Kiosk202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
