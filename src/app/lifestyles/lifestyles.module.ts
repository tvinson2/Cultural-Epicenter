import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifestylesRoutingModule } from './lifestyles-routing.module';
import { Kiosk301Component } from './kiosk301/kiosk301.component';
import { Kiosk302Component } from './kiosk302/kiosk302.component';
import { Kiosk303Component } from './kiosk303/kiosk303.component';


@NgModule({
  declarations: [Kiosk301Component, Kiosk302Component, Kiosk303Component],
  imports: [
    CommonModule,
    LifestylesRoutingModule
  ]
})
export class LifestylesModule { }
