import { Component } from '@angular/core';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
})
export class Child2 {

  constructor(public productService: ProductService) { }

}
