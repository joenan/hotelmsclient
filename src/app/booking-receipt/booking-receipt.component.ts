import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-receipt',
  templateUrl: './booking-receipt.component.html',
  styleUrls: ['./booking-receipt.component.css']
})
export class BookingReceiptComponent implements OnInit {
  collectedId: any;
  transactionEntity: any = '';
  constructor(private service: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.collectedId = value.id;
      this.getTransactionByGuestId(this.collectedId);
      localStorage.removeItem("event");
    });
  }

  getTransactionByGuestId(id: any) {
    return this.service.getTransactionByGuestId(id).subscribe(res => {
      this.transactionEntity = res;
      console.log(this.transactionEntity)
    });
  }

  downloadReceipt() {
    return this.service.getTransactionReceiptByTransactionId(this.transactionEntity.transactionId).subscribe(response => {
      var binaryData = [];
      binaryData.push(response);
      window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }))

    });
  }

}
