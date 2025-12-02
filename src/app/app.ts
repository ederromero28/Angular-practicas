import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit{

  constructor() {
    console.log("Dentro del constructor");

   }

   ngOnInit(): void {
    console.log("Dentro del ngOnInit");
   }

}
