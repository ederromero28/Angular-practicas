import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userName: string = '';
  number: number = 0;

  addOne() {
    this.number++;
  }

  /* --- ADICIONAL ---
  Con esta funcion podemos actualizar el contador de caracteres del nombre de usuario, aumenta y disminuye segun se escriba o borre texto.

    updateCount() {
    this.number = this.userName ? this.userName.length : 0;
  }
  --- FIN ADICIONAL --- */

}
