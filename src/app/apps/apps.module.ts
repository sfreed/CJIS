import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { CtModule } from './criminal-trespassing/ct.module';
import { BoloModule } from './bolo/bolo.module';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, AngularFontAwesomeModule,
    CtModule, BoloModule
  ],
  providers: [],
  exports: [
  ]
})
export class AppsModule {}
