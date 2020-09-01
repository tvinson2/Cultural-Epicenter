import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WholenessRoutingModule } from './wholeness-routing.module';
import { Kiosk601Component } from './kiosk601/kiosk601.component';
import { Kiosk602Component } from './kiosk602/kiosk602.component';
import { Kiosk603Component } from './kiosk603/kiosk603.component';


@NgModule({
  declarations: [Kiosk601Component, Kiosk602Component, Kiosk603Component],
  imports: [
    CommonModule,
    WholenessRoutingModule
  ]
})
export class WholenessModule { }
