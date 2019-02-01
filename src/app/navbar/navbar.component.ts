import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo: any = '';

  constructor(private service:ApiService) { }

  ngOnInit() {
    this.getPageLogo();
  }

  getPageLogo() {
    return this.service.getPageLogo().subscribe(res => {
      this.logo = res;
      //console.log(this.logo.logo)
    });
  }

}
