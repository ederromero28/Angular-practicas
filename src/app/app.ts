import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor() {
    this.name = new FormControl('');
    this.duration = new FormControl('');
    this.director = new FormControl('');

    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director
    });
  }

  handleSubmit(): void {
    console.log(this.movieForm.value);
  }

}
