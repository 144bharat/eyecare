import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
toggle='inline';
runtoggle(data:string)
{
  if(this.toggle==="inline")
  {
    this.toggle="none";
  }else{
    this.toggle="none";
  }
}
}
