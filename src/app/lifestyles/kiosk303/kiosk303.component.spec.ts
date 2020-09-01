import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk303Component } from './kiosk303.component';

describe('Kiosk303Component', () => {
  let component: Kiosk303Component;
  let fixture: ComponentFixture<Kiosk303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
