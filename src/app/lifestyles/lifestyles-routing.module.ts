import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kiosk301Component } from './kiosk301/kiosk301.component';
import { Kiosk302Component } from './kiosk302/kiosk302.component';
import { Kiosk303Component } from './kiosk303/kiosk303.component';
const routes: Routes = [

  {path:'', component: Kiosk301Component},
  {path:'', component: Kiosk302Component},
  {path:'', component: Kiosk303Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifestylesRoutingModule { }
