import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { MovieForm } from '../../components/movie-form/movie-form';

@Component({
  selector: 'app-movie-form-page',
  imports: [Header, MovieForm ],
  templateUrl: './movie-form-page.html',
  styleUrl: './movie-form-page.css',
})
export class MovieFormPage {

}
