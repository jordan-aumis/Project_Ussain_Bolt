import { Component, OnInit } from '@angular/core';
import { GymnasiumDataServiceService } from '../services/gymnasium-data-service.service';

@Component({
  selector: 'app-ussain-bolt-app-info-page',
  templateUrl: './ussain-bolt-app-info-page.component.html',
  styleUrls: ['./ussain-bolt-app-info-page.component.css']
})
export class UssainBoltAppInfoPageComponent implements OnInit {

  gymnasesData : any[];

  constructor(
    private gymnasiumDataServiceService: GymnasiumDataServiceService
  ) {
    this.gymnasesData = [];
   }

  ngOnInit(): void {
    this.gymnasiumDataServiceService.fetchGymnases().subscribe(
      (gymnasiumData: any) => {
        this.gymnasesData = gymnasiumData;
        console.log(this.gymnasesData)
      }
    )
  }

}
