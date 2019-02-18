import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;
  email = "";
  password = "";

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'email': new FormControl(this.email, [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl(this.password, [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  submit(){
    if(this.registerForm.invalid)
      return;

    console.log(this.registerForm.value);
  }
}
