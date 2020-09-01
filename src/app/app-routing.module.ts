import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /// enatertainment module
  { path: 'entertainment', loadChildren: () => import('./entertainment/entertainment.module').then(m => m.EntertainmentModule) },
  /// libraries module
  { path: 'libraries', loadChildren: () => import('./libraries/libraries.module').then(m => m.LibrariesModule) },
  /// lifestyles module
  { path: 'lifestyles', loadChildren: () => import('./lifestyles/lifestyles.module').then(m => m.LifestylesModule) },
  /// resources module
  { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
  /// showcases module
  { path: 'showcases', loadChildren: () => import('./showcases/showcases.module').then(m => m.ShowcasesModule) },
  /// wholeness module
  { path: 'wholeness', loadChildren: () => import('./wholeness/wholeness.module').then(m => m.WholenessModule) },

  { path: '', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
