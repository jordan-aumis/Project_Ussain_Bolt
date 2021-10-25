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

  constructor(
    private activatedRoute: ActivatedRoute,
    private gymnasiumDataServiceService: GymnasiumDataServiceService
  ) {
    this.gymnasesData = [];
    this.oneGymnasesData = [];
    this.id = null;
  }

  ngOnInit(): void {
    this.gymnasiumDataServiceService.fetchGymnases().subscribe(
      (gymnasiumData: any) => {
        this.gymnasesData = gymnasiumData;
      }
    );
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.fetchById();
  }

  ngOnChanges(): void {
    this.fetchById();
  }

  fetchById(): void {
    this.gymnasiumDataServiceService.fetchById(this.id).subscribe(
      (oneGymnasesData: any) => {
        this.oneGymnasesData = oneGymnasesData;
        console.log("this.oneGymnasesData", this.oneGymnasesData);
      }
    );
  }

}
