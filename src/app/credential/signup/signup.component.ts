import { Component } from '@angular/core';
import { FormControl,FormGroup,FormControlName } from "@angular/forms";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
signupform = new FormGroup(
  {
    email: new FormControl(''),
    password: new FormControl(''),
    profile: new FormControl(''),
    cnfmpassword: new FormControl(''),
  }
  )
  signupuser()
  {
    console.log(this.signupform.value);
  }
}
