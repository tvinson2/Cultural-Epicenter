import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kiosk401Component } from './kiosk401/kiosk401.component';
import { Kiosk402Component } from './kiosk402/kiosk402.component';
import { Kiosk403Component } from './kiosk403/kiosk403.component';
const routes: Routes = [

  {path:'', component: Kiosk401Component},
  {path:'', component: Kiosk402Component},
  {path:'', component: Kiosk403Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
