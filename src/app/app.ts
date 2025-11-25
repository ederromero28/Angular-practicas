import { Component } from '@angular/core';
import { Child } from "./components/child/child";

@Component({
  selector: 'app-root',
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  text: String = 'Variable desde el padre';

  person: any = {
    sex: 'hombre',
    age: 30
  };

}
