import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcasesRoutingModule } from './showcases-routing.module';
import { Kiosk501Component } from './kiosk501/kiosk501.component';
import { Kiosk502Component } from './kiosk502/kiosk502.component';
import { Kiosk503Component } from './kiosk503/kiosk503.component';


@NgModule({
  declarations: [Kiosk501Component, Kiosk502Component, Kiosk503Component],
  imports: [
    CommonModule,
    ShowcasesRoutingModule
  ]
})
export class ShowcasesModule { }
