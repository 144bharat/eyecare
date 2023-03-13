import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';        //NgForm used here as a form datatype in getForm() function.
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayData: any = {};
  doctorArr: string[] = ["-----Select Doctor / Speciality-----", "GENERAL CHECKUP", "CATARACT", "LASIK", "RETINA", "GLUCOMA", "SQUINT", "CORNEA", "OCCULOPLASTY", "DR.Rashmi", "DR.Harish", "DR.Manish", "DR.Sapna Gautam", "DR.Mukul Roy", "DR.Simran jain", "DR.Kedar Nath Gupta", "DR.RAJESH Gupta", "DR.Rohit kumar", "DR.Armaan Hassan", "DR.Aman Kumar", "DR.Amisha Singh"];
  hospitalArr: string[] = ["---select hospital branch---", "LODHI ROAD", "MOTI BAGH", "R K PURAM", "PUSA ROAD", "BHOGAL","GOLE MARKET"];
  timingArr: string[] = ["---Opening Time---", "7:10am-8:30am", "8:40am-9:40am", "10:00am-11:10am", "11:30am-12:10pm", "lunch","1:30pm-2:10pm","2:30pm-3:40pm","4:00pm-5:00pm"];
  constructor(private router:Router){}

  getForm(data: NgForm) {
    this.displayData = data;
    console.log(this.displayData);
    this.router.navigate(['./credential/signup'])
  }
}
