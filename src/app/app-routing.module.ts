import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { CarRentalDetailComponent } from './car-rental-detail/car-rental-detail.component';
import { BookingReceiptComponent } from './booking-receipt/booking-receipt.component';
import { EventBookingComponent } from './event-booking/event-booking.component';
import { EventBookingDetailComponent } from './event-booking-detail/event-booking-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'carbooking', component: CarRentalComponent },
  { path: 'carbooking-details', component: CarRentalDetailComponent },
  { path: 'carbooking-details/:id', component: CarRentalDetailComponent },
  { path: 'booking-receipt/:id', component: BookingReceiptComponent },
  { path: 'eventbooking-details/:id', component: EventBookingDetailComponent },
  { path: 'eventbooking', component: EventBookingComponent },
  { path: 'booking-receipt', component: BookingReceiptComponent },
  { path: 'details/:id', component: RoomDetailsComponent },
  { path: 'payment/:id', component: PaymentComponent },
  { path: 'receipt/:id', component: ReceiptsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
