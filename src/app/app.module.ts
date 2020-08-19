import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgProgressModule } from 'ngx-progressbar';
import { MatSliderModule } from '@angular/material/slider';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { Page404Component } from './modules/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    NgProgressModule.withConfig({
      spinner: false
    }),
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
