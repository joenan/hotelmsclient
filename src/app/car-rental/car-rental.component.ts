import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent implements OnInit {

  carBookingList: any;

  constructor(private router: Router, private service: ApiService) { }

  ngOnInit() {
    this.getCarBooking();
  }

  getCarBooking() {
    this.service.getCarBooking().subscribe(res => {
      this.carBookingList = res;
      console.log(this.carBookingList)
    });
  }

  bookNowClicked(name: any, id: any) {
    localStorage.setItem("event", name);
    this.router.navigate(['carbooking-details/' + id]);
  }

}
