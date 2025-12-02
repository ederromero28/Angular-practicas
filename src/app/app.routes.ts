import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MovieList } from './pages/movie-list/movie-list';
import { MovieFormPage } from './pages/movie-form-page/movie-form-page';
import { MovieDetails } from './pages/movie-details/movie-details';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'movies', component: MovieList},
  {path: 'movies/:movieName', component: MovieDetails},
  {path: 'create', component: MovieFormPage},
];
