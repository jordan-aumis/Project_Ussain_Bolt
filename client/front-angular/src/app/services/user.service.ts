import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_URL_LOGIN = 'http://localhost:8000/auth/login';
  USER_URL_REGISTER = 'http://localhost:8000/auth/register';
  GET_USER_URL = 'http://localhost:8000/auth';
  DELETE_USER_URL = 'http://localhost:8000/auth/delete';
  constructor(
    private httpClient: HttpClient
  ) {}

  fetchUser(email: string, pwd: string) {
    return this.httpClient.post(this.USER_URL_LOGIN, {'email': email, 'password': pwd});
  }

  createUser(email: string, pwd: string, firstName: string, lastName: string ){
    return this.httpClient.post(this.USER_URL_REGISTER, {'email': email, 'password': pwd, 'firstName': firstName, 'lastName': lastName});
  }

  getUsers() {
    return  this.httpClient.get(this.GET_USER_URL)
  }

  deleteUser(id: string) {
    return this.httpClient.delete(`${this.DELETE_USER_URL}/${id}`);
  }


}

