import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  public room: any;
 
  constructor(private service: ApiService, private router: Router) { }

  ngOnInit() {
    this.getRoomInformation();
  }

  getRoomInformation() {
    return this.service.getRoomInformation().subscribe(data => {
      this.room = data;
      console.log(this.room);
    });

  }

  //getting room type Id from the Selected room in order to display the room information in the other page
  getSelectedRoomClicked(id: any) {
    this.router.navigate(['details/'+id]);
    ApiService.pageReload = true;
  }

}
