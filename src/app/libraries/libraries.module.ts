import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrariesRoutingModule } from './libraries-routing.module';
import { Kiosk201Component } from './kiosk201/kiosk201.component';
import { Kiosk202Component } from './kiosk202/kiosk202.component';
import { Kiosk203Component } from './kiosk203/kiosk203.component';


@NgModule({
  declarations: [Kiosk201Component, Kiosk202Component, Kiosk203Component],
  imports: [
    CommonModule,
    LibrariesRoutingModule
  ]
})
export class LibrariesModule { }
