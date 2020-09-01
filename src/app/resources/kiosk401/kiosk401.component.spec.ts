import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk401Component } from './kiosk401.component';

describe('Kiosk401Component', () => {
  let component: Kiosk401Component;
  let fixture: ComponentFixture<Kiosk401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
