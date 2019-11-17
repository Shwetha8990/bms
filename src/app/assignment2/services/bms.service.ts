import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { isArray } from 'util';
import { MovieEvent, MovieFilter, Filter, FilterType } from '../../models/movie';


@Injectable({
  providedIn: 'root'
})
export class BmsService {

  private languages: any;
  private movies: any;
  private genres: any;

  private url = 'https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs';
  private cdnUrl = 'https://in.bmscdn.com/events/moviecard';

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      map(res => {
        if (isArray(res) && res.length === 2) {
          this.setLanguages(res[0]);
          this.setMovies(res[1]);
          this.setGenres(res[1]);
          return true;
        }
      })
    );
  }

  filerByLanguage(language: string): MovieEvent[] {
    return this.movies.filter(item => item.eventLanguage.trim().toLowerCase() ===
      language.trim().toLowerCase());
  }

  getMovieArray(movies: any): MovieEvent[] {
    return Object.keys(movies).map(i => {
      movies[i].id = i;
      return movies[i]
    });
  }

  getImageUrl(movieId: string): string {
    return this.cdnUrl + '/' + movieId + '.jpg';
  }

  getLanguages(): any {
    return this.languages;
  }

  getGenres(): string[] {
    return this.genres;
  }

  getMovies(): any {
    return this.movies;
  }

  filterMovies(filterList: Filter[], movieCollection: any): any {
    const langFilters = filterList.filter(item => item.filterType === FilterType.Language);
    const genreFilters = filterList.filter(item => item.filterType === FilterType.Genre);

    if (langFilters.length > 0) {
      movieCollection = this.filterMoviesForKey('EventLanguage', langFilters, movieCollection);
    }

    if (genreFilters.length > 0) {
      movieCollection = this.filterMoviesForKey('EventGenre', genreFilters, movieCollection);
    }
    return Object.keys(movieCollection).length === 0 ? null : movieCollection;
  }

  private filterMoviesForKey(filterKey: string, filters: Filter[], movieCollection: any): any {
    const langs = filters.map(item => item.value.toLowerCase());
    movieCollection = Object.keys(movieCollection)
      .filter(key => {
        return langs.indexOf(movieCollection[key][filterKey].toLowerCase()) > -1;
      })
      .reduce((obj, key) => {
        obj[key] = movieCollection[key];
        return obj;
      }, {});
    return movieCollection;
  }

  private setLanguages(languages: any[]) {
    this.languages = languages;
  }

  private setMovies(movieCollection: any) {
    this.movies = movieCollection;
  }

  private setGenres(movies: any) {
    let genres = [];
    Object.keys(movies).forEach(key =>
      genres.push(...movies[key].EventGenre.split('|')));
    this.genres = [...new Set(genres)];
  }
}
