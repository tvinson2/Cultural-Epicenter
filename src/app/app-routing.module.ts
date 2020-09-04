import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntertainmentModule} from './entertainment-routing.module';

      import { Kiosk101Component } from './kiosk101/kiosk101.component';
      import { Kiosk102Component } from './kiosk102/kiosk102.component';
      import { Kiosk103Component } from './kiosk103/kiosk103.component';
const routes: Routes = [
  /// Modules
  {path:'', modules: EntertainmentModule, children: [

      {path:'kiosk101', component:Kiosk101Component}
      {path:'kiosk102', component:Kiosk102Component}
      {path:'kiosk103', component:Kiosk103Component}
  ]}
  { path: 'entertainment', loadChildren: () => import('./entertainment/entertainment.module').then(m => m.EntertainmentModule) },
  { path: 'libraries', loadChildren: () => import('./libraries/libraries.module').then(m => m.LibrariesModule) },
  { path: 'lifestyles', loadChildren: () => import('./lifestyles/lifestyles.module').then(m => m.LifestylesModule) },
  { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
  { path: 'showcases', loadChildren: () => import('./showcases/showcases.module').then(m => m.ShowcasesModule) },
  { path: 'wholeness', loadChildren: () => import('./wholeness/wholeness.module').then(m => m.WholenessModule) },
  { path: '', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
