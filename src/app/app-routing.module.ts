import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { Page404Component } from './modules/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/launches'
      },
      {
        path: 'launches',
        loadChildren: () => import('./modules/launches/launches.module').then(m => m.LaunchesModule)
      },
      {
        path: 'launches/launch/:id',
        loadChildren: () => import('./modules/launch/launch.module').then(m => m.LaunchModule)
      }
    ]
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
