import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk302Component } from './kiosk302.component';

describe('Kiosk302Component', () => {
  let component: Kiosk302Component;
  let fixture: ComponentFixture<Kiosk302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
