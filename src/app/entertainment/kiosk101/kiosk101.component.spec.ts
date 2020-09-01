import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk101Component } from './kiosk101.component';

describe('Kiosk101Component', () => {
  let component: Kiosk101Component;
  let fixture: ComponentFixture<Kiosk101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
