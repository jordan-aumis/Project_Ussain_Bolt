import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_URL_LOGIN = 'http://localhost:8000/auth/login';
  USER_URL_REGISTER = 'http://localhost:8000/auth/register';

  constructor(
    private httpClient: HttpClient
  ) {}

  fetchUser(email: string, pwd: string) {
    return this.httpClient.post(this.USER_URL_LOGIN, {'email': email, 'password': pwd});
   }

  createUser(email: string, pwd: string, firstName: string, lastName: string ){
    return this.httpClient.post(this.USER_URL_REGISTER, {'email': email, 'password': pwd, 'firstName': firstName, 'lastName': lastName});
  }

  
}

