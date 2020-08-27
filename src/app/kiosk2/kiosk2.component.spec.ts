import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kiosk2Component } from './kiosk2.component';

describe('Kiosk2Component', () => {
  let component: Kiosk2Component;
  let fixture: ComponentFixture<Kiosk2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kiosk2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kiosk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
