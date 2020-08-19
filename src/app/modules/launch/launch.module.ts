import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchComponent } from './components/launch/launch.component';


@NgModule({
  declarations: [LaunchComponent],
  imports: [
    CommonModule,
    LaunchRoutingModule
  ]
})
export class LaunchModule { }
