import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {


  collectedId: any;
  roomDetails: any = '';
  urlId: any;
  galleryDetails: any = '';

  constructor(private router: Router, private route: ActivatedRoute, private service: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(value => {

      this.collectedId = value.id;
      this.getRoomTypeById(this.collectedId);
      this.getRoomGalleryDetails(this.collectedId);
    });
    this.reloadPage();

  }

  reloadPage() {
    if (ApiService.pageReload) {
      window.location.reload(false);
      ApiService.pageReload = false;
    }

  }

  getRoomGalleryDetails(id: any) {
    return this.service.getRoomDetailsGallery(id).subscribe(res => {
      this.galleryDetails = res;
      console.log(+this.galleryDetails)

    });
  }

  getRoomTypeById(id: any) {
    return this.service.getRoomTypeById(id).subscribe(response => {
      this.roomDetails = response;
      console.log(this.roomDetails)
    });
  }
  makePayment(selectedRoomId: any) {
    this.router.navigate(['payment/' + selectedRoomId]);
  }

}
