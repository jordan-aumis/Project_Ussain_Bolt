import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AthleteService } from '../services/athlete.service';
import { GymnasiumDataServiceService } from '../services/gymnasium-data-service.service';
import { Routes, Router } from '@angular/router';



@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css'],
  providers: [UserService, AthleteService, GymnasiumDataServiceService]
})
export class BackOfficeComponent implements OnInit {

  userCreate: FormGroup;
  gymCreate: FormGroup;
  athleteCreate: FormGroup;
  userData: any;
  gymData: any;
  athleteData: any;
  users: any;

  constructor(
    private FormBuilder: FormBuilder,
    private user: UserService,
    private athlete: AthleteService,
    private route: Router,
    private gymnasium: GymnasiumDataServiceService,
  ) {
    this.userCreate = new FormGroup({})
    this.gymCreate = new FormGroup({})
    this.athleteCreate = new FormGroup({})
    this.userData;
    this.gymData;
    this.athleteData;
  }

  ngOnInit(): void {
    this.fetchUsers()
    this.fetchGymnasium()
    this.fetchAthlete()
    this.initializeForms()
  }

  fetchUsers() {
    this.user.getUsers().subscribe(
      (data)=>{
        console.log("Users", data)
        this.userData = data
        // this.userUpdate = data.map((data: any, index: number)=>{
        //   new FormGroup({
        //     firstName: new FormControl(data.prenom, Validators.required),
        //     lastName: new FormControl(data.nom, Validators.required),
        //     email: new FormControl(data.email, [Validators.required, Validators.email]),
        //   })
        // })
      }
    )
  }

  deleteUser(value: string) {
    this.user.deleteUser(value).subscribe(
      (data)=>{
        console.log("Users", data)
        this.route.navigate(['admin'])
      }
    )
  }

  fetchGymnasium() {
    this.gymnasium.fetchGymnases().subscribe(
      (data)=>{
        this.gymData = data
      }
    )
  }

  fetchAthlete(){
    this.athlete.getAthletes().subscribe(
      (data)=>{
        console.log("DATA TYPE ATH", data)
        this.athleteData = data
      }
    )
  }

  initializeForms(){

    this.userCreate = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })

    this.athleteCreate = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    })

    this.gymCreate = new FormGroup({
      nom: new FormControl('', Validators.required),
      adresse: new FormControl('', Validators.required),
      ville: new FormControl('', Validators.required),
      surface: new FormControl('', Validators.required),
    })

  }

}
