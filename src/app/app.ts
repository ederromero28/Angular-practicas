import { Component } from '@angular/core';
import { Child } from "./components/child/child";
import { Child2 } from "./components/child2/child2";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child, Child2],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

}
