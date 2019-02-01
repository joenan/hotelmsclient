import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 



@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public static pageReload = false;
  baseUrl: String = '/api/home/api/v1';

  adminUrl: String = '/api/admin/api/v1';

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
  getTransaction(id: any) {
    return this.http.get(this.baseUrl + '/getTransaction/' + id);
  }

  getRoomDetailsGallery(id:any) {
    return this.http.get(this.baseUrl + '/getRoomDetailsGallery/'+id)
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

}
