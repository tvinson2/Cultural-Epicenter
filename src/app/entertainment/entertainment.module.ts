import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntertainmentRoutingModule } from './entertainment-routing.module';
import { Kiosk101Component } from './kiosk101/kiosk101.component';
import { Kiosk102Component } from './kiosk102/kiosk102.component';
import { Kiosk103Component } from './kiosk103/kiosk103.component';
//import { ArtistsComponent } from './kiosk101/artists/artists.component';


@NgModule({
  declarations: [Kiosk101Component, Kiosk102Component, Kiosk103Component, //ArtistsComponent
  ],
  imports: [
    CommonModule,
    EntertainmentRoutingModule
  ]
})
export class EntertainmentModule { }
