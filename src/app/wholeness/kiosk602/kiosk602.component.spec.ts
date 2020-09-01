import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk602Component } from './kiosk602.component';

describe('Kiosk602Component', () => {
  let component: Kiosk602Component;
  let fixture: ComponentFixture<Kiosk602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
