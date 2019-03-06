import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public static pageReload = false;
  baseUrl: String = '/api/home/api/v1';

  adminUrl: String = '/api/admin/api/v1';

  public static ROOM_BOOKING = '1';
  public static CAR_RENTAL = '2';
  public static HALL_RENTAL = '3';
  public static GARDEN_RENTAL = '4';
  public static PRODUCT_PURCHASE = '5';

  constructor(private http: HttpClient) { }

  getRoomInformation() {
    return this.http.get(this.baseUrl + '/getRoomInformation');
  }

  getRoomTypeById(id: any) {
    return this.http.get(this.baseUrl + '/getRoomTypeById/' + id);
  }

  getRoomTypes() {
    return this.http.get(this.baseUrl + '/getRoomType');
  }

  getRoomTypeByName(name: any) {
    return this.http.get(this.baseUrl + '/getRoomTypeByName/' + name);
  }

  saveTransactionDetails(dataToSave: any) {
    return this.http.post(this.baseUrl + '/saveTransactions/', dataToSave);
  }
  getTransactionReceipt(id: any) {
    return this.http.get(this.baseUrl + '/getTransactionReceipt/' + id);
  }
  getTransactionReceiptByTransactionId(id: any) {
    return this.http.get(this.baseUrl + '/getTransactionReceiptByTransactionId/' + id);
  }
  getTransactionByGuestId(id: any) {
    return this.http.get(this.baseUrl + '/getTransactionByGuestId/' + id);
  }
  getTransactionById(id: any) {
    return this.http.get(this.baseUrl + '/getTransactionById/' + id);
  }

  getRoomDetailsGallery(id: any) {
    return this.http.get(this.baseUrl + '/getRoomDetailsGallery/' + id)
  }


  //////////////logo/////////////////
  getPageLogo() {
    return this.http.get(this.baseUrl + '/getPageLogo')
  }

  ////////////get Footer////////////////
  getPageFooter() {
    return this.http.get(this.baseUrl + '/getPageFooter')
  }
  getBestPlacesAroundTheHotel() {
    return this.http.get(this.baseUrl + '/getPlacesAroundTheHotel')
  }

  //////////////About us///////////////
  getAboutUsInformation() {
    return this.http.get(this.baseUrl + '/getAboutUs');
  }

  ////////////Background Pictures///////////////////
  getBackgroundPictures() {
    return this.http.get(this.baseUrl + '/getBackgroundPictures');
  }




  ///CarBooking API
  getCarBooking() {
    return this.http.get(this.baseUrl + '/getCarBooking');
  }
  getCarBookingById(id: any) {
    return this.http.get(this.baseUrl + '/getCarBookingById/' + id);
  }

  ///EventBooking API
  getEventCenter() {
    return this.http.get(this.baseUrl + '/getEventCenter');
  }
  getEventCenterById(id: any) {
    return this.http.get(this.baseUrl + '/getEventCenterById/' + id);
  }


  //States API
  getStates() {
    return this.http.get(this.baseUrl + '/getStates')
  }


  //Save Booking Transaction API
  saveBookingTransaction(event: any, dateFrom:any, dateTo:any, data: any) {
    return this.http.post(this.baseUrl + '/saveBookingTransactions/' + event + '', data);
  }

}
