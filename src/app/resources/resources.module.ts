import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { Kiosk401Component } from './kiosk401/kiosk401.component';
import { Kiosk402Component } from './kiosk402/kiosk402.component';
import { Kiosk403Component } from './kiosk403/kiosk403.component';


@NgModule({
  declarations: [Kiosk401Component, Kiosk402Component, Kiosk403Component],
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ]
})
export class ResourcesModule { }
