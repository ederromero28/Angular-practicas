import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Movie } from '../../services/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [Header, RouterLink],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {

  constructor(public movieService: Movie) { }

}
