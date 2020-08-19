import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesComponent } from './components/launches/launches.component';
import { LaunchesRoutingModule } from './launches-routing.module';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [LaunchesComponent],
  imports: [
    CommonModule,
    LaunchesRoutingModule,
    NgxPaginationModule
  ]
})
export class LaunchesModule { }
