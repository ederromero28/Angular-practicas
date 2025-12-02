import { Injectable } from '@angular/core';
import SuperProduct from '../models/SuperProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  product: SuperProduct;

  constructor() {
    this.product = {
      name: 'Computer',
      price: 999,
      isForSale: true,
    };
  }

  setProductName(name: string) {
    this.product.name = name;
  }

}
