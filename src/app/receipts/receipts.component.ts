import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit {

  room: any;
  collectedPaymentId: any;
  transactionList: any;

  constructor(private router: Router, private route: ActivatedRoute, private service: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.collectedPaymentId = value.id;
      console.log("Transaction Id: " + this.collectedPaymentId);
      this.getTransaction(this.collectedPaymentId);
    });
  }


  getTransaction(id: any) {
    return this.service.getTransaction(id).subscribe(response => {
      this.transactionList = response;
    });
  }

  downloadReceipt(event: any) {
    return this.service.getTransactionReceipt(event).subscribe(response => {
      // const link = document.createElement('a');
      // link.href = window.URL.createObjectURL(response);
      // link.click();

      var binaryData = [];
      binaryData.push(response);
      window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }))

    });
  }
}