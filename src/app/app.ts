import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  isDark: boolean = false;
  isFont: boolean = false;

  toggleDarkMode() {
    this.isDark = !this.isDark;
  }

  toggleFontSize() {
    this.isFont = !this.isFont;
  }
}
