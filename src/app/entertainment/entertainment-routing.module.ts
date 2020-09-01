import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kiosk101Component } from './kiosk101/kiosk101.component';
import { Kiosk102Component } from './kiosk102/kiosk102.component';
import { Kiosk103Component } from './kiosk103/kiosk103.component';
const routes: Routes = [

  {path:'', component: Kiosk101Component},
  {path:'', component: Kiosk102Component},
  {path:'', component: Kiosk103Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntertainmentRoutingModule { }
