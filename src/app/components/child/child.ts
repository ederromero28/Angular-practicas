import { Component, input, Input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  // @Input()
  // msg: String = '';

  //SEÑALES
  msg = input<String>('');

  // @Input()
  // person: any

  //SEÑALES
  person = input<any>();

}
