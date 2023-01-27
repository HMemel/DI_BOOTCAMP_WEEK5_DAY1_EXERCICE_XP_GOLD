import { Component, OnInit } from '@angular/core';
import {FormBuilder,  Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-forms',
  templateUrl: './my-forms.page.html',
  styleUrls: ['./my-forms.page.scss'],
})
export class MyFormsPage implements OnInit {

  loginForm: FormGroup ;
  constructor(private formBuild: FormBuilder) {
    this.loginForm = this.formBuild.group({
      firstName:  new FormControl(null, [
        Validators.required
    ]),
      lastName:  new FormControl(null, [
        Validators.required
    ]),
      phone:  new FormControl(null, [
        Validators.required
    ]),
      email:  new FormControl(null, [
        Validators.required
    ]),
   });
  }

  submitForm(){
    console.log(this.loginForm.value);
  }

  ngOnInit() {
 
  }

}
