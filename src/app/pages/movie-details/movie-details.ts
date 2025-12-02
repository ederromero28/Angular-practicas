import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../services/movie';
import Movies from '../../models/Movies';

@Component({
  selector: 'app-movie-details',
  imports: [Header],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails {

  selectedMovie?: Movies;

  constructor(private route: ActivatedRoute, private movieService: Movie) {
    const movieName = route.snapshot.params['movieName'];
    this.selectedMovie = movieService.getMovie(movieName);
  }

}
