import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  val1: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  birthPlace: string;
  licenceNm: number;
  mestoIzdavanja: string;

  constructor() { }

  ngOnInit() {
  }

}
