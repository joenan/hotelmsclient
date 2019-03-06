import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.css']
})
export class EventBookingComponent implements OnInit {

  eventBookingList: any;

  constructor(private router: Router, private service: ApiService) { }

  ngOnInit() {
    this.getEventBooking();
  }

  getEventBooking() {
    this.service.getEventCenter().subscribe(res => {
      this.eventBookingList = res;
      console.log(this.eventBookingList)
    });
  }

  bookNowClicked(name:any, id: any) {
    localStorage.setItem("event", name);
    this.router.navigate(['eventbooking-details/' + id]);
  }

}
