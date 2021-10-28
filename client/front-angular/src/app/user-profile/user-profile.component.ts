import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AthleteService } from '../services/athlete.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [AthleteService]
})
export class UserProfileComponent implements OnInit {

  profileForm: FormGroup;
  userData: any;
  athlete: any;
  id: any;
  sportList: string[] = ["Basket Ball", "Hand Ball", "Football"]

  constructor(
    private FormBuilder: FormBuilder,
    private athleteService: AthleteService,
    private route: Router,
    private localStorageService: LocalStorageService
  ) {
    this.profileForm = new FormGroup({})
    this.athlete;
    this.id;
    this.userData;
  }

  ngOnInit(): void {
    if(this.localStorageService.retrieve('user')){
      this.id = this.localStorageService.retrieve('user').user._id || null;
      this.userData = this.localStorageService.retrieve('user').user
    }
    this.fetchAthlete();
    this.initializeForm();
  }

  fetchAthlete() {

    console.log("ID", this.id)
    this.athleteService.fetchAthlete(this.id).subscribe(
      (athlete: any) => {
        console.log({ "ATHLETE": athlete })
        if (athlete) {
          this.athlete = athlete;
        }
      }
    )
  }

  initializeForm() {
    this.profileForm = new FormGroup({
      prenom: new FormControl(this.userData.prenom, Validators.required),
      nom: new FormControl(this.userData.nom, Validators.required),
      sexe: new FormControl('f'),
      age: new FormControl(''),
      sports: new FormControl([]),
    })
  }

  onSubmit(): void {
    console.log("Update Athlete", this.profileForm)

    this.athleteService.updateAthlete(this.id, this.profileForm.value.nom, this.profileForm.value.prenom, this.profileForm.value.sexe, this.profileForm.value.age, this.profileForm.value.sports).subscribe(
      (userAthlete: any) => {
        if (userAthlete) {
          this.route.navigate(['profile'])
        }
      }
    )
  }
}
