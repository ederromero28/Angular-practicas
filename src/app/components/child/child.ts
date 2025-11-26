import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  // @Output()
  // login: EventEmitter<any> = new EventEmitter<any>();

  login = output<any>();

  userName: string = 'Eder Romero';

  handleLogin() {
    this.login.emit(this.userName);
  }

}
