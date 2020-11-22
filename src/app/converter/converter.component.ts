import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  amount = 1;
  from = "EU";
  to = "USD";
  rate = 1.19; 

  convert(): number{

    return this.amount * this.rate;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
