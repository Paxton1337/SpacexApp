import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchComponent } from './components/launch/launch.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [LaunchComponent],
  imports: [
    CommonModule,
    LaunchRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvquCDRWvlZ2UCHtxAlNA3-M2_JRqd4mo'
    })
  ]
})
export class LaunchModule { }
