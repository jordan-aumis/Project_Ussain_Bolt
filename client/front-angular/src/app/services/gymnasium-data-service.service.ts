import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GymnasiumDataServiceService {

  GYMNASES_URL  = 'http://localhost:8000/gymnases';
  UPDATE_URL = 'http://localhost:8000/gymnases/update';
  DELETE_URL = 'http://localhost:8000/gymnases/delete';
  CREATE_URL = 'http://localhost:8000/gymnases/new'

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchGymnases() {
   return this.httpClient.get(this.GYMNASES_URL);
  }
  fetchById(id: any) {
   return this.httpClient.get(`${this.GYMNASES_URL}/${id}`);
  }

  updateGymnase(id: any, gymName: string, address: string, town: string, area: number, sessions: any) {
    return this.httpClient.put(`${this.UPDATE_URL}/${id}`, {gymName: gymName, address: address, town: town, area: area, sessions: sessions});
  }

  deleteGymnase(id: any) {
    return this.httpClient.delete(`${this.DELETE_URL}/${id}`);
  }

  createGymnase(gymName: string, address: string, town: string, area: number, sessions: any) {
    return this.httpClient.post(this.CREATE_URL, {gymName: gymName, address: address, town: town, area: area, sessions: sessions});
  }

}

