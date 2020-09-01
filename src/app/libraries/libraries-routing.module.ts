import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kiosk201Component } from './kiosk201/kiosk201.component';
import { Kiosk202Component } from './kiosk202/kiosk202.component';
import { Kiosk203Component } from './kiosk203/kiosk203.component';
const routes: Routes = [

  {path:'', component: Kiosk201Component},
  {path:'', component: Kiosk202Component},
  {path:'', component: Kiosk203Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrariesRoutingModule { }
