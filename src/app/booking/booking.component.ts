import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';        //NgForm used here as a form datatype in getForm() function.
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  displayData2: any = {};
  timingArr: string[] = ["---Opening Time---", "7:10am-8:30am", "8:40am-9:40am", "10:00am-11:10am", "11:30am-12:10pm", "lunch","1:30pm-2:10pm","2:30pm-3:40pm","4:00pm-5:00pm"];
  constructor(private router:Router){}
  getForm(data: NgForm) {
    this.displayData2 = data;
    console.log(this.displayData2);
    this.router.navigate(['./booking'])
  }
}