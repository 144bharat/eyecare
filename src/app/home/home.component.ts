import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';        //NgForm used here as a form datatype in getForm() function.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayData: any = {};
  doctorArr: string[] = ["-----Select Doctor / Speciality-----", "GENERAL CHECKUP", "CATARACT", "LASIK", "RETINA", "GLUCOMA", "SQUINT", "CORNEA", "OCCULOPLASTY", "DR.Rashmi", "DR.Harish", "DR.Manish", "DR.Sapna Gautam", "DR.Mukul Roy", "DR.Simran jain", "DR.Kedar Nath Gupta", "DR.RAJESH Gupta", "DR.Rohit kumar", "DR.Armaan Hassan", "DR.Aman Kumar", "DR.Amisha Singh"];
  hospitalArr: string[] = ["---select hospital branch---", "LODHI ROAD", "MOTI BAGH", "R K PURAM", "PUSA ROAD", "BHOGAL","GOLE MARKET"];
  getForm(data: NgForm) {
    this.displayData = data;
    console.log(data);
    console.log(this.displayData);
  }
}
