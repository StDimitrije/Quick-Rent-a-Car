import { Component, OnInit } from '@angular/core';


interface City {
  name: string;
}

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  // calendar
  date1: Date;
  date2: Date;

  // location
    cities: City[]; 
    selectedCity1: City;
    selectedCity2: City;


  constructor() {
    this.cities = [
      {name: 'New York'},
      {name: 'Rome'},
      {name: 'London'},
      {name: 'Istanbul'},
      {name: 'Paris'}
  ];

   }

  ngOnInit() {
  }

}
