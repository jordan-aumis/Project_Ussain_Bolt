import { Component, OnInit } from '@angular/core';
import { GymnasiumDataServiceService } from '../services/gymnasium-data-service.service';

@Component({
  selector: 'app-ussain-bolt-app-gym-card',
  templateUrl: './ussain-bolt-app-gym-card.component.html',
  styleUrls: ['./ussain-bolt-app-gym-card.component.css']
})
export class UssainBoltAppGymCardComponent implements OnInit {

  gymnasesData : any[] | undefined;

  constructor(
    private gymnasiumDataServiceService: GymnasiumDataServiceService
  ) {
    this.gymnasesData = [];
   }

  ngOnInit(): void {
    this.gymnasiumDataServiceService.fetchGymnases().subscribe(
      (gymnasiumData: any) => {
        this.gymnasesData = gymnasiumData;
      }
    )
  }
}
