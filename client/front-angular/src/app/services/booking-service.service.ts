import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  BOOKING_URL  = 'http://localhost:8000/booking';

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchBookings() {
    return this.httpClient.get(this.BOOKING_URL);
   }

   fetchById(id: any) {
    return this.httpClient.get(`${this.BOOKING_URL}/${id}`);
   }

  createBooking(idGymnase: number, idSportif: number, seances: any[] ){
    return this.httpClient.post(`${this.BOOKING_URL}/new`, {'idGymnase': idGymnase, 'idSportif': idSportif, 'seances': seances});
  }

}
