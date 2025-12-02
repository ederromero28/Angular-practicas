import { Component } from '@angular/core';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  constructor(public productService: ProductService) {

  }

}
