import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  providers: [UserService]

})
export class RegisterPageComponent implements OnInit {

  registerForm: FormGroup
  constructor(private FormBuilder: FormBuilder, private user: UserService, private route: Router) {
    this.registerForm = new FormGroup({})
  }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(){
    this.registerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit(): void {
    console.log("registerForm", this.registerForm)
    this.user.createUser(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.firstName,  this.registerForm.value.lastName).subscribe(
      (userData: any) => {
        if(userData){
          this.route.navigate(['login'])
        }
      }
    )
  }

}
