import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry2',
  templateUrl: './patient-entry2.component.html',
  styleUrls: ['./patient-entry2.component.css']
})
export class PatientEntry2Component {
 patientName=""
 patientId=""
 address=""
 contactno=""
 dateOfAppointment=""
 patientImage=""
 doctorName=""
   

 readValues=()=>
 {
  let data:any={"patientName":this.patientName,"patientId":this.patientId,"address":this.address,"contactno":this.contactno,"dateOfAppointment":this.dateOfAppointment,"patientImage":this.patientImage,"doctorName":this.doctorName}
  console.log(data)
 }
}
