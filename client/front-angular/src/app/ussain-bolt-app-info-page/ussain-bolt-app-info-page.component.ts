import { Component, OnInit } from '@angular/core';
import { GymnasiumDataServiceService } from '../services/gymnasium-data-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ussain-bolt-app-info-page',
  templateUrl: './ussain-bolt-app-info-page.component.html',
  styleUrls: ['./ussain-bolt-app-info-page.component.css']
})
export class UssainBoltAppInfoPageComponent implements OnInit {

  gymnasesData: any[];
  oneGymnasesData: any;
  id: any;
  params: any;
  isSeacneVisble: boolean;
  isBookingModalOpen: boolean;
  seances: any[] | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gymnasiumDataServiceService: GymnasiumDataServiceService
  ) {
    this.gymnasesData = [];
    this.oneGymnasesData = [];
    this.id = null;
    this.isSeacneVisble = false;
    this.isBookingModalOpen = false;
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
  openBookingModal() : any {
    this.isBookingModalOpen = true;
  }
}
