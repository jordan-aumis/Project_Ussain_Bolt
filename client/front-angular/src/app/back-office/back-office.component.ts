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
  sports: any;
  sessions: any;

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
    this.sessions = [];
    this.sports = {
      Jouer: [],
      Arbitrer: [],
      Entrainer: []
    };
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
      }
    )
  }

  deleteData(value: string, type: string) {
    switch (type) {

      case "athlete":
        this.athlete.deleteAthlete(value).subscribe(
          (data)=>{
            console.log("Users", data)
          }
        )
        break;

      case "gym":
        this.gymnasium.deleteGymnase(value).subscribe(
          (data)=>{
            console.log("Users", data)
          }
        )
        break;

      case "user":
        this.user.deleteUser(value).subscribe(
          (data)=>{
            console.log("Users", data)
          }
        )
        break;

      default:
        break;
    }
    window.location.reload()
  }

  updateData(model: string, id: string) {
    this.route.navigate(['admin/'+model+"/"+id])
  }

  createData(type: string) {
    switch (type) {

      case "gym":
        this.gymnasium.createGymnase(this.gymCreate.value.name, this.gymCreate.value.address, this.gymCreate.value.town, this.gymCreate.value.area, this.sessions).subscribe(
          (data: any)=>{
            window.location.reload()
          }
        )
        break;

      case "athlete":
        this.athlete.createFullAthlete(this.athleteCreate.value.lastName, this.athleteCreate.value.firstName, this.athleteCreate.value.gender, this.athleteCreate.value.age, this.sports)
        break;

      case "user":
        this.user.createUser(this.userCreate.value.email, this.userCreate.value.password, this.userCreate.value.firstName, this.userCreate.value.lastName)
        break;

      default:
        break;
    }
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
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      town: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
    })

  }

  addSession(value: any) {
    this.sessions.push(value)
  }

  addSports(value: any) {
    switch (value.type) {

      case 'Entrainer':
        this.sports.Entrainer.push(value.libelle)
        break;

      case 'Arbitrer':
        this.sports.Arbitrer.push(value.libelle)
        break;

      case 'Jouer':
        this.sports.Jouer.push(value.libelle)
        break;

      default:
        break;
    }
  }

}
