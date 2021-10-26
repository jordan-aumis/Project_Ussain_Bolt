import { Component, OnInit } from '@angular/core';
import { GymnasiumDataServiceService  } from '../services/gymnasium-data-service.service';
import { BookingServiceService  } from '../services/booking-service.service';
import { ActivatedRoute, Params } from '@angular/router';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private gymnasiumDataServiceService: GymnasiumDataServiceService,
    private bookingServiceService: BookingServiceService
  ) {
    this.gymnasesData = [];
    this.selectedSeanceData = [];
    this.oneGymnasesData = [];
    this.id = null;
    this.isSeacneVisble = false;
    this.showBooking = false;
    this.seances = null;
  };

  ngOnInit(): void {
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
        console.log("this.oneGymnasesData", this.oneGymnasesData);
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
  onCreateBooking(): void {
    this.bookingServiceService.createBooking(this.oneGymnasesData.IdGymnase, 1, this.selectedSeanceData).subscribe(
      (booking: any) => {
        this.booking = booking;
        console.log("this.booking", this.booking);
        console.log(booking)
      }
    )
  }

}

