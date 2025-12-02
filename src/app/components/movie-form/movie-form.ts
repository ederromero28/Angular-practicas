import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { Movie } from '../../services/movie';

@Component({
  selector: 'app-movie-form',
  imports: [ReactiveFormsModule],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css',
})
export class MovieForm {

  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  // en el constructor inyectamos el servicio Movie
  constructor(public movieService: Movie) {

    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('', [
      Validators.required,
      Validators.max(300)
    ]);
    this.director = new FormControl('', Validators.required);

    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director
    });
  }

  handleSubmit(): void {
    console.log("Movie created: ",this.movieForm.value);
    // llamamos al método addMovie del servicio Movie para agregar la nueva película
    this.movieService.addMovie(this.movieForm.value);
    this.movieForm.reset();
  }

}
