import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { GymnasiumDataServiceService  } from '../services/gymnasium-data-service.service';
import { BookingServiceService  } from '../services/booking-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ussain-bolt-app-info-page',
  templateUrl: './ussain-bolt-app-info-page.component.html',
  styleUrls: ['./ussain-bolt-app-info-page.component.css']
})
export class UssainBoltAppInfoPageComponent implements OnInit {

  gymnasesData: any[];
  selectedSeanceData: any[];
  oneGymnasesData: any;
  id: any;
  params: any;
  isSeacneVisble: boolean;
  showBooking: boolean;
  seances: any[] | null;
  booking: any;
  user: any;
  showSuccessPage: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gymnasiumDataServiceService: GymnasiumDataServiceService,
    private bookingServiceService: BookingServiceService,
    private localStorageService: LocalStorageService,
    private route: Router,
  ) {
    this.gymnasesData = [];
    this.selectedSeanceData = [];
    this.oneGymnasesData = [];
    this.id = null;
    this.isSeacneVisble = false;
    this.showBooking = false;
    this.showSuccessPage = false;
    this.seances = null;
  };

  ngOnInit(): void {

    if(this.localStorageService.retrieve('user')){
      this.id = this.localStorageService.retrieve('user').user._id || null;
      this.user = this.localStorageService.retrieve('user').user
    }
    this.gymnasiumDataServiceService.fetchGymnases().subscribe(
      (gymnasiumData: any) => {
        this.gymnasesData = gymnasiumData;
      }
    );
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.fetchById(params.id);
    });
  }

  fetchById(id: String): void {
    this.gymnasiumDataServiceService.fetchById(id).subscribe(
      (oneGymnasesData: any) => {
        this.oneGymnasesData = oneGymnasesData;
      }
    );
  }

  fetchSeanceByDay(day: string): void {
    const result = this.oneGymnasesData.Seances.filter((seance: {
      Duree: number,
      Horaire: number,
      IdSportifEntraineur: number,
      Jour: string,
      Libelle: string,}) => seance.Jour == day);
      this.seances = result;
  }
  isVisbleSeanceAction(): any {
    this.isSeacneVisble = true;
  }
  isHiddenSeanceAction(): any {
    this.isSeacneVisble = false;
  }
  showBookingsAction() : any {
    if(!this.user){
      this.route.navigate(['login'])
    }
    this.showBooking = true;
  }
  selectedSeancesAction(IdSportifEntraineur: any, Jour: any, Horaire: any, Duree: any, Libelle: any) : any {
    const values = {
      "IdSportifEntraineur": IdSportifEntraineur,
			"Jour": Jour,
			"Horaire": Horaire,
			"Duree": Duree ,
			"Libelle" : Libelle
    }

    if(values){
      this.selectedSeanceData.push(values);
    }

  }
  removeSelectedSeancesAction(IdSportifEntraineur: any) : any {
    let items = this.selectedSeanceData;

    items = items.filter(function(data) { return data.IdSportifEntraineur != IdSportifEntraineur});
    this.selectedSeanceData = items;

  }

  onCreateBooking(): void {
    this.bookingServiceService.createBooking(this.oneGymnasesData.IdGymnase, this.user._id, this.selectedSeanceData).subscribe(
      (booking: any) => {
        this.booking = booking;
        this.showSuccessPage = true;
      }
    )
  }

}

