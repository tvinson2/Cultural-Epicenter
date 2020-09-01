import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk503Component } from './kiosk503.component';

describe('Kiosk503Component', () => {
  let component: Kiosk503Component;
  let fixture: ComponentFixture<Kiosk503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
