import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { GymnasiumDataServiceService } from '../services/gymnasium-data-service.service';

@Component({
  selector: 'app-ussain-bolt-app-user-page',
  templateUrl: './ussain-bolt-app-user-page.component.html',
  styleUrls: ['./ussain-bolt-app-user-page.component.css'],
})
export class UssainBoltAppUserPageComponent implements OnInit {

  gymnasesData : any[] | undefined;
  isConected: any | undefined;

  constructor(
    private gymnasiumDataServiceService: GymnasiumDataServiceService,
    private localStorageService: LocalStorageService
  ) {
    this.gymnasesData = [];
    this.isConected;
   }

  ngOnInit(): void {
    this.isConected = this.localStorageService.retrieve('user').token
    console.log("IS CONNECTED", this.isConected)
    this.gymnasiumDataServiceService.fetchGymnases().subscribe(
      (gymnasiumData: any) => {
        this.gymnasesData = gymnasiumData;
      }
    )
  }
}
