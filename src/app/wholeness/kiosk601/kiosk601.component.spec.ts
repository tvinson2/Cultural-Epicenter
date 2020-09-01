import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk601Component } from './kiosk601.component';

describe('Kiosk601Component', () => {
  let component: Kiosk601Component;
  let fixture: ComponentFixture<Kiosk601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
