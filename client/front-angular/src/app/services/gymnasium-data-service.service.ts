import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GymnasiumDataServiceService {

  GYMNASES_URL  = 'http://localhost:8000/gymnases';
  SEANCE_URL  = 'http://localhost:8000/gymnases/';

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchGymnases() {
   return this.httpClient.get(this.GYMNASES_URL);
  }
  fetchSeance() {
   return this.httpClient.get(this.SEANCE_URL);
  }
}

