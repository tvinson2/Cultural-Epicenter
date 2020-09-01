import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk201Component } from './kiosk201.component';

describe('Kiosk201Component', () => {
  let component: Kiosk201Component;
  let fixture: ComponentFixture<Kiosk201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
