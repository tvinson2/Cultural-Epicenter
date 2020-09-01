import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk502Component } from './kiosk502.component';

describe('Kiosk502Component', () => {
  let component: Kiosk502Component;
  let fixture: ComponentFixture<Kiosk502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
