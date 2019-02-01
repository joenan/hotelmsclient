import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  collectedIdForPayment: any;
  roomDetails: any = '';
  email: any;
  phone: any;
  name: any;
  payload: FormData = new FormData();
  savedTransaction: any;
  savedGuestId: any;
  ref: number;
  amount: number;
  key: any = "pk_test_e8338d5ffd6bd6da53fd9175001ec5fdc26a48bd";


  constructor(private router: Router, private route: ActivatedRoute, private service: ApiService) {

  }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.collectedIdForPayment = value.id;
      this.getRoomTypeById(this.collectedIdForPayment);
    });
  }
  getRoomTypeById(id: any) {
    return this.service.getRoomTypeById(id).subscribe(response => {
      this.roomDetails = response;
      console.log(this.roomDetails.roomType)
      this.amount = this.roomDetails.roomAmount;
      this.ref = Math.floor(Math.random() * 9000000000) + 1000000000;

    });

  }

  confirmPayment() {

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
      amount: this.roomDetails.roomAmount,
      guestId: {
        name: this.name,
        email: this.email,
        phone: this.phone
      },
      roomTypeId: this.roomDetails
    }

    console.log(transaction);

    this.service.saveTransactionDetails(transaction).subscribe(response => {
      this.savedTransaction = response;
      this.savedGuestId = this.savedTransaction.guestId.guestId;
      this.router.navigate(['receipt/' + this.savedGuestId]);
    });

  }
}
