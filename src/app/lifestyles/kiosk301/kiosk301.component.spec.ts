import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk301Component } from './kiosk301.component';

describe('Kiosk301Component', () => {
  let component: Kiosk301Component;
  let fixture: ComponentFixture<Kiosk301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
