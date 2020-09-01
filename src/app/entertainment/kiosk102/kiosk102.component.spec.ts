import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk102Component } from './kiosk102.component';

describe('Kiosk102Component', () => {
  let component: Kiosk102Component;
  let fixture: ComponentFixture<Kiosk102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
