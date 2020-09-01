import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kiosk501Component } from './kiosk501/kiosk501.component';
import { Kiosk502Component } from './kiosk502/kiosk502.component';
import { Kiosk503Component } from './kiosk503/kiosk503.component';
const routes: Routes = [

  {path:'', component: Kiosk501Component},
  {path:'', component: Kiosk502Component},
  {path:'', component: Kiosk503Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcasesRoutingModule { }
