import { Component } from '@angular/core';
import { Child } from "./components/child/child";

@Component({
  selector: 'app-root',
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  name: String = '';

  setName(e : any){
    this.name = e;
  }

}
