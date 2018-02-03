import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import {RadioButtonModule, CalendarModule, DropdownModule, SelectItem, InputTextModule,ButtonModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ReservationComponent} from './reservation/reservation.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ChooseVehicleComponent } from './choose-vehicle/choose-vehicle.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes =[
  {path: '', component: ShowcaseComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'choose-vehicle', component: ChooseVehicleComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowcaseComponent,
    ReservationComponent,
    ConfirmationComponent,
    ChooseVehicleComponent,
    FooterComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    DropdownModule,
    HttpModule,
    RadioButtonModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forRoot(appRoutes),
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
