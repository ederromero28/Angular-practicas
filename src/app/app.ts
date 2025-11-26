import { Component } from '@angular/core';
import { Child } from "./components/child/child";

@Component({
  selector: 'app-root',
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  userName: string;

  constructor() {
    this.userName = 'Eder';
  }

}
