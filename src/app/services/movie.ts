import { Injectable } from '@angular/core';
import Movies from '../models/Movies';

@Injectable({
  providedIn: 'root',
})
export class Movie {

  movies: Movies[];

    constructor() {
    this.movies = [
      {
        name: "Inception",
        duration: 148,
        director: "Christopher Nolan",
      },
      {
        name: "The Matrix",
        duration: 136,
        director: "The Wachowskis",
      },
      {
        name: "Interstellar",
        duration: 169,
        director: "Christopher Nolan",
      },
    ];
  }

  //metodo para agregar una pelicula
  addMovie(movie: Movies): void{
    this.movies.push(movie);
  }

  getMovie(name: string): Movies | undefined {
    return this.movies.find((movie) => movie.name === name);
  }

}
