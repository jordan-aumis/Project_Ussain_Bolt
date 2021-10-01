import { Component, OnInit } from '@angular/core';
import { GymnasiumDataServiceService } from '../services/gymnasium-data-service.service';

@Component({
  selector: 'app-ussain-bolt-app',
  templateUrl: './ussain-bolt-app.component.html',
  styleUrls: ['./ussain-bolt-app.component.css']
})
export class UssainBoltAppComponent implements OnInit {

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
