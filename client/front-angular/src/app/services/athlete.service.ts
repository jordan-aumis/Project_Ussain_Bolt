import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AthleteService {

  ATHLETE_GET = 'http://localhost:8000/sportifs';
  ATHLETE_CREATE = 'http://localhost:8000/sportifs/new';
  ATHLETE_UPDATE = 'http://localhost:8000/sportifs/update';
  ATHLETE_DELETE = 'http://localhost:8000/sportifs/delete'

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchAthlete(id : any) {
    return this.httpClient.get(`${this.ATHLETE_GET}/${id}`);
   }

  createAthlete(id: string, nom: string, prenom: string) {
    return this.httpClient.post(this.ATHLETE_CREATE, {"idSportif": id, "nom": nom, "prenom": prenom});
  }

  createFullAthlete(nom: string, prenom: string, sexe: string, age: number, sports: any) {
    return this.httpClient.post(this.ATHLETE_CREATE, {"Nom": nom, "Prenom": prenom, "Sexe": sexe, "Age": age, "Sports": sports});
  }

  updateAthlete(id: string, nom: string, prenom: string, sexe: string, age: number, sports: any) {
    return this.httpClient.put(`${this.ATHLETE_UPDATE}/${id}`, {"nom": nom, "prenom": prenom, "Sexe": sexe, "Age": age, "Sports": sports});
  }

  getAthletes() {
    return this.httpClient.get(this.ATHLETE_GET);
  }

  deleteAthlete(id : any){
    return this.httpClient.delete(`${this.ATHLETE_DELETE}/${id}`);
  }

}
