import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { PatientEntry2Component } from './patient-entry2/patient-entry2.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';



@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
