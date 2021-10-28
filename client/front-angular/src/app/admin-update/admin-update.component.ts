import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../services/user.service';
import { AthleteService } from '../services/athlete.service';
import { GymnasiumDataServiceService } from '../services/gymnasium-data-service.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {

  id: any;
  model: any;
  userForm: FormGroup;
  data: any;
  athleteForm: FormGroup;
  gymForm: FormGroup;
  sessions: any;
  sports: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private FormBuilder: FormBuilder,
    private user: UserService,
    private athlete: AthleteService,
    private gym: GymnasiumDataServiceService
  ) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.model = this.route.snapshot.paramMap.get('model')
    this.data;
    this.userForm = new FormGroup({})
    this.athleteForm = new FormGroup({})
    this.gymForm = new FormGroup({})
    this.sessions = [];
    this.sports = {
      Jouer: [],
      Arbitrer: [],
      Entrainer: []
    };
  }

  ngOnInit(): void {
    console.log("ID", this.id)
    console.log("MODEL", this.model)
    this.initializeForms({ nom: '', prenom: '', sports: [] })
    this.fetchData()
  }

  fetchData() {
    switch (this.model) {
      case "user":
        this.user.fetchById(this.id).subscribe(
          (data: any) => {
            this.initializeForms(data)
          }
        )
        break;

      case "athlete":
        this.athlete.fetchAthlete(this.id).subscribe(
          (data: any) => {
            console.log("DATA", data)
            console.log("ICI")
            if(data.sports.Jouer){
              data.sports.Jouer.forEach((sport: any) => {
                this.sports.Jouer.push(sport)
              });
            }
            if(data.sports.Entrainer){
              data.sports.Entrainer.forEach((sport: any) => {
                this.sports.Entrainer.push(sport)
              });
            }
            if(data.sports.Arbitrer){
              data.sports.Arbitrer.forEach((sport: any) => {
                this.sports.Arbitrer.push(sport)
              });
            }
            console.log("SPORTS", this.sports)
            this.initializeForms(data)
          }
        )
        break;

      case "gym":
        this.gym.fetchById(this.id).subscribe(
          (data: any) => {
            console.log("DATA", data)
            data.Seances.forEach((seance: any) => {
              this.sessions.push(seance)
            });
            this.initializeForms(data)
          }
        )
        break;

      default:
        break;
    }
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

  initializeForms(data: any) {
    this.userForm = new FormGroup({
      firstName: new FormControl(data.prenom, Validators.required),
      lastName: new FormControl(data.nom, Validators.required),
      email: new FormControl(data.email, [Validators.required, Validators.email]),
    })

    this.athleteForm = new FormGroup({
      lastName: new FormControl(data.nom, Validators.required),
      firstName: new FormControl(data.prenom, Validators.required),
      gender: new FormControl(data.sexe, Validators.required),
      age: new FormControl(data.age, Validators.required),
    })

    this.gymForm = new FormGroup({
      name: new FormControl(data.NomGymnase, Validators.required),
      address: new FormControl(data.Adresse, Validators.required),
      town: new FormControl(data.Ville, Validators.required),
      surface: new FormControl(data.Surface, Validators.required),
    })
  }

  updateData(){
    switch (this.model) {
      case "athlete":
      this.athlete.updateAthlete(this.id, this.athleteForm.value.lastName, this.athleteForm.value.firstName, this.athleteForm.value.gender, this.athleteForm.value.age, this.sports).subscribe(
        (data: any)=>{
          this.router.navigate(['admin'])
        }
      )
        break;

      case "user":
      this.user.updateUser(this.id, this.userForm.value.email, this.userForm.value.firstName, this.userForm.value.lastName).subscribe(
        (data: any)=>{
          this.router.navigate(['admin'])
        }
      )
        break;

      case "gym":
      this.gym.updateGymnase(this.id, this.gymForm.value.name, this.gymForm.value.address, this.gymForm.value.town, this.gymForm.value.surface, this.sessions).subscribe(
        (data: any)=>{
          this.router.navigate(['admin'])
        }
      )
        break;

      default:
        break;
    }
  }

}
