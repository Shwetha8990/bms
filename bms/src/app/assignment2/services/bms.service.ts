import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { isArray } from 'util';
import { MovieEvent } from 'src/app/models/movies';


@Injectable({
  providedIn: 'root'
})
export class BmsService {

  languages: any;
  movies: any;

  private url = 'https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs';
  private cdnUrl = 'https://in.bmscdn.com/events/moviecard';
  
  constructor(private http: HttpClient) { }

  getComingSoonMovies(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      map(res => {
        if (isArray(res) && res.length === 2) {
          this.languages = res[0];
          this.movies =  this.getMovieArray(res[1]);
          return { languages: this.languages, movies: this.movies }
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
    return this.cdnUrl + '/'+ movieId + '.jpg'; 
  }

}
