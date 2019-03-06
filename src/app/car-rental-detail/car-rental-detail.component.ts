import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Capability } from 'protractor';
import { zip } from 'rxjs';

@Component({
  selector: 'app-car-rental-detail',
  templateUrl: './car-rental-detail.component.html',
  styleUrls: ['./car-rental-detail.component.css']
})
export class CarRentalDetailComponent implements OnInit {

  public show: boolean = false;
  public available: boolean = false;

  bookingForm: FormGroup;
  checkInDate: any;
  checkOutDate: any;

  collectedId: any;
  carBookingEntity: any;
  statesList: any;
  amount: number;
  amountToPay: number;
  email: any;
  paymentSuccess: any;
  ref: any;


  constructor(private formBuilder: FormBuilder, private service: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.collectedId = value.id;
      this.getCarRentalById(this.collectedId);
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
  }

  getCarRentalById(id: any) {
    return this.service.getCarBookingById(id).subscribe(res => {
      this.carBookingEntity = res;
      this.amount = this.carBookingEntity.carPrice;
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
      amount: this.amountToPay,
      guestId: this.bookingForm.value
    }

    return this.service.saveBookingTransaction(localStorage.getItem("event"), this.checkInDate, this.checkOutDate, transaction).subscribe(res => {
      this.paymentSuccess = res;
      this.router.navigate(['booking-receipt/' + this.paymentSuccess.guestId.guestId]);
    });
  }

}
