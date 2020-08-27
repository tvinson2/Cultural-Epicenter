import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk1Component } from './kiosk1.component';

describe('Kiosk1Component', () => {
  let component: Kiosk1Component;
  let fixture: ComponentFixture<Kiosk1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
