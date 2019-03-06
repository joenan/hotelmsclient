import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ApiService } from './service/api.service';
import { TruncateModule } from 'ng2-truncate';
import { Angular4PaystackModule } from 'angular4-paystack';
import { NavbarComponent } from './navbar/navbar.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { CarRentalDetailComponent } from './car-rental-detail/car-rental-detail.component';
import { BookingReceiptComponent } from './booking-receipt/booking-receipt.component';
import { EventBookingComponent } from './event-booking/event-booking.component';
import { EventBookingDetailComponent } from './event-booking-detail/event-booking-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    RoomsComponent,
    RoomDetailsComponent,
    PaymentComponent,
    ReceiptsComponent,
    HeaderComponent,
    NavbarComponent,
    CarRentalComponent,
    CarRentalDetailComponent,
    BookingReceiptComponent,
    EventBookingComponent,
    EventBookingDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TruncateModule,
    Angular4PaystackModule,
    AppRoutingModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
