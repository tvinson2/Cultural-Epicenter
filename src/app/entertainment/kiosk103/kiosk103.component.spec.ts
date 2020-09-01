import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk103Component } from './kiosk103.component';

describe('Kiosk103Component', () => {
  let component: Kiosk103Component;
  let fixture: ComponentFixture<Kiosk103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
