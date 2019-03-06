import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {

  logo: any = '';
  footer: any = {};
  places: any = [];
  public room: any = [];
  aboutUsInformationList: any = [];
  roomTypeList: any = [];
  pic: any = {};

 


  constructor(private router: Router, private service: ApiService) { }

  ngOnInit() {
    this.getBackgroundImages();
    this.getPageLogo();
    this.getRoomTypes();
    this.getAboutUsInformation();
    this.getRoomInformation();
    this.getFooterInformation();
    this.getBestPlacesAroundTheHotel();

  }
  ngAfterContentInit() {

  }
  checkAvailability() {
    this.router.navigate(['rooms']);
  }
  getRoomInformation() {
    return this.service.getRoomInformation().subscribe(data => {
      this.room = data;

    });

  }

  getPageLogo() {
    return this.service.getPageLogo().subscribe(res => {
      this.logo = res;
      //console.log(this.logo.logo)
    });
  }
  getFooterInformation() {
    return this.service.getPageFooter().subscribe(res => {
      this.footer = res;
    });
  }
  getBestPlacesAroundTheHotel() {
    return this.service.getBestPlacesAroundTheHotel().subscribe(res => {
      this.places = res;

    });
  }

  getAboutUsInformation() {
    return this.service.getAboutUsInformation().subscribe(res => {
      this.aboutUsInformationList = res;
      // console.log(this.aboutUsInformationList)
    });
  }

  getRoomTypes() {
    return this.service.getRoomTypes().subscribe(response => {
      this.roomTypeList = response;

    });
  }

  getBackgroundImages() {
    return this.service.getBackgroundPictures().subscribe(res => {
      this.pic = res;
      // console.log(this.pic)
    });
  }

  reset() {
    this.logo = '';
    this.footer = '';
    this.places = [];
    this.room = [];
    this.aboutUsInformationList = [];
    this.pic = {};
  }


  // loadJavaScripts() {
  //   const dynamicScripts = [
  //     'assets/js/jquery.min.js',
  //     'assets/js/superfish.js',
  //     'assets/js/jquery.superslides.js',
  //     'assets/js/jquery.fancybox.js',
  //     'assets/js/jquery.sticky.js',
  //     'assets/js/jquery.easing.1.3.js',
  //     'assets/js/select2.js',
  //     'assets/js/owl.carousel.js',
  //     'assets/js/jquery.appear.js',
  //     'assets/js/scripts.js'
  //   ];
  //   for (let i = 0; i < dynamicScripts.length; i++) {
  //     const node = document.createElement('script');
  //     node.src = dynamicScripts[i];
  //     node.type = 'text/javascript';
  //     node.async = true;
  //     node.charset = 'utf-8';
  //     document.getElementsByTagName('head')[0].appendChild(node);
  //   }
  // }


}
