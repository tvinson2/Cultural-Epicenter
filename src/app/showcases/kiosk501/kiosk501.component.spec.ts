import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk501Component } from './kiosk501.component';

describe('Kiosk501Component', () => {
  let component: Kiosk501Component;
  let fixture: ComponentFixture<Kiosk501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
