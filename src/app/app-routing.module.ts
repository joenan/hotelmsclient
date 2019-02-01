import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceiptsComponent } from './receipts/receipts.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'details/:id', component: RoomDetailsComponent },
  { path: 'payment/:id', component: PaymentComponent },
  { path: 'receipt/:id', component: ReceiptsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
