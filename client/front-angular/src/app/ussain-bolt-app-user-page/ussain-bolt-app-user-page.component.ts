import { Component, OnInit } from '@angular/core';
import { GymnasiumDataServiceService } from '../services/gymnasium-data-service.service';

@Component({
  selector: 'app-ussain-bolt-app-user-page',
  templateUrl: './ussain-bolt-app-user-page.component.html',
  styleUrls: ['./ussain-bolt-app-user-page.component.css']
})
export class UssainBoltAppUserPageComponent implements OnInit {

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
