import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk203Component } from './kiosk203.component';

describe('Kiosk203Component', () => {
  let component: Kiosk203Component;
  let fixture: ComponentFixture<Kiosk203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
