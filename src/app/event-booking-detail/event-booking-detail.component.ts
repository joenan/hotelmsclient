import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-booking-detail',
  templateUrl: './event-booking-detail.component.html',
  styleUrls: ['./event-booking-detail.component.css']
})
export class EventBookingDetailComponent implements OnInit {

  public show: boolean = false;
  public available: boolean = false;

  bookingForm: FormGroup;
  checkInDate: any;
  checkOutDate: any;

  collectedId: number;
  eventCenterEntity: any = '';
  statesList: any = [];
  amountToPay: number;
  paymentSuccess: any = '';
  amount: any;
  ref: any;


  constructor(private formBuilder: FormBuilder, private service: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.collectedId = value.id;
      this.getEventCenterById(this.collectedId);
    });

    this.bookingForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],

    });
    this.getStates();
  }

  checkAvailability() {
    this.show = true;
    this.available = true;
    console.log(localStorage.getItem("event"));
  }

  getEventCenterById(id: any) {
    return this.service.getEventCenterById(id).subscribe(res => {
      this.eventCenterEntity = res;

      this.amount = this.eventCenterEntity.price;
      this.amountToPay = this.amount * 100;
      this.ref = Math.floor(Math.random() * 9000000000) + 1000000000;

    });

  }
  getStates() {
    return this.service.getStates().subscribe(res => {
      this.statesList = res;
    });
  }
  paymentCancel() {

  }
  paymentDone(event: any) {
    let transaction = {
      message: event.message,
      reference: event.reference,
      status: event.status,
      trans: event.trans,
      transaction: event.transaction,
      trxRef: event.trxref,
      amount: this.amount,
      guestId: this.bookingForm.value
    }

    return this.service.saveBookingTransaction(localStorage.getItem("event"), this.checkInDate, this.checkOutDate, transaction).subscribe(res => {
      this.paymentSuccess = res;
      this.router.navigate(['booking-receipt/' + this.paymentSuccess.guestId.guestId]);
    });
  }

}
