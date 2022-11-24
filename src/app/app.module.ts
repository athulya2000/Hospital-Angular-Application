import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientEntry2Component } from './patient-entry2/patient-entry2.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientEntry2Component,
    PatientSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
