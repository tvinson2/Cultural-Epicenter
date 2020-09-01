import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk402Component } from './kiosk402.component';

describe('Kiosk402Component', () => {
  let component: Kiosk402Component;
  let fixture: ComponentFixture<Kiosk402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
