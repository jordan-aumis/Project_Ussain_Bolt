import { Component, OnInit } from '@angular/core';
import { GymnasiumDataServiceService } from '../services/gymnasium-data-service.service';

@Component({
  selector: 'app-ussain-bolt-app',
  templateUrl: './ussain-bolt-app.component.html',
  styleUrls: ['./ussain-bolt-app.component.css']
})
export class UssainBoltAppComponent implements OnInit {

  constructor(
    private gymnasiumDataServiceService: GymnasiumDataServiceService
  ) { }

  ngOnInit(): void {
    this.gymnasiumDataServiceService.fetchGymnases().subscribe(
      (gymnasiumData: any) => {
        console.log('Fetched Data : ', gymnasiumData);
      }
    )
    console.log('Welcome component init');
  }

}
