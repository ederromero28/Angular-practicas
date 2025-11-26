import { Component } from '@angular/core';
import SuperProduct from './models/SuperProduct';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  userName: string;
  myNumber: number;
  myBoolean: boolean;
  superProduct: SuperProduct;



  constructor() {
    this.userName = 'Eder';
    this.myNumber = 10;
    this.myBoolean = true;
    this.superProduct = {
      name: "nuevo producto",
      price: 100,
      isForSale: true
    };
  }
}
