import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk603Component } from './kiosk603.component';

describe('Kiosk603Component', () => {
  let component: Kiosk603Component;
  let fixture: ComponentFixture<Kiosk603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
