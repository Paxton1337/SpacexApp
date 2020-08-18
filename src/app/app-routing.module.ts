import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesComponent } from './components/launches/launches.component';
import { LaunchComponent } from './components/launch/launch.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/launches'
  },
  {
    path: 'launches',
    component: LaunchesComponent
  },
  {
    path: 'launch/:id',
    component: LaunchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
