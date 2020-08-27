import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Kiosk1Component } from './kiosk1/kiosk1.component';
import { Kiosk2Component } from './kiosk2/kiosk2.component';

const routes: Routes = [
  { path: 'kiosk1', component: Kiosk1Component},
  { path: 'kiosk2', component: Kiosk2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
