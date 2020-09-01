import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk403Component } from './kiosk403.component';

describe('Kiosk403Component', () => {
  let component: Kiosk403Component;
  let fixture: ComponentFixture<Kiosk403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
