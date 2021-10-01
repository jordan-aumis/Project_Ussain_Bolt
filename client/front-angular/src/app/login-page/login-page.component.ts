import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Routes, Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [UserService]
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  userData: any | undefined;

  constructor(private FormBuilder: FormBuilder, private user: UserService, private route: Router, private localStorageService: LocalStorageService) {
    this.loginForm = new FormGroup({})
    this.userData;
   }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit(): void {
    this.user.fetchUser(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (userData: any) => {
        if(userData){
          this.userData = userData;
          this.localStorageService.store("user", userData)
          this.route.navigate(['app'])
        }
      }
    )
    console.log({"LOGIN FORM": this.loginForm.value, "USER DATA": this.userData})
  }

}
