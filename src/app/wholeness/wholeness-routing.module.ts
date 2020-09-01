import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kiosk601Component } from './kiosk601/kiosk601.component';
import { Kiosk602Component } from './kiosk602/kiosk602.component';
import { Kiosk603Component } from './kiosk603/kiosk603.component';
const routes: Routes = [

  {path:'', component: Kiosk601Component},
  {path:'', component: Kiosk602Component},
  {path:'', component: Kiosk603Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WholenessRoutingModule { }
