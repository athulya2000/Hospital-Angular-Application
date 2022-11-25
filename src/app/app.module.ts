import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientEntry2Component } from './patient-entry2/patient-entry2.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const myRoute:Routes=[
{
  path:"",
  component:PatientEntry2Component
},
{
  path:"search",
  component:PatientSearchComponent
},
{
  path:"delete",
  component:PatientDeleteComponent
}
]



@NgModule({
  declarations: [
    AppComponent,
    PatientEntry2Component,
    PatientSearchComponent,
    PatientDeleteComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
