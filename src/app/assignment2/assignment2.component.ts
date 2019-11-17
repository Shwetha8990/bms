import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BmsService } from './services/bms.service';
import { MovieEvent, MovieFilter, FilterType, Filter } from '../models/movie';
import * as _ from 'lodash';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.scss']
})
export class Assignment2Component implements OnInit {

  movies: any;
  languages: string[] = [];
  genres: string[] = []
  selectedMovie: MovieEvent;
  previousTrailerItem: any;
  previousMovieGridItem: any;
  filters: Filter[] = [];
  selectedLanguage: string[];
  selectedGenre: string[];
  isLoading = true;
  constructor(private bmsService: BmsService) { }

  ngOnInit() {
    this.bmsService.getAllMovies().subscribe(res => {
      this.isLoading = false;
      if (res) {
        this.movies = this.bmsService.getMovies();
        this.languages = this.bmsService.getLanguages();
        this.genres = this.bmsService.getGenres();
      }
    }, () => {
      this.isLoading = false;
    });
  }

  onMovieSelect(movie: MovieEvent, movieGridItem: HTMLElement, movieTrailerItem: HTMLElement) {
    this.selectedMovie = movie;
    if (this.previousTrailerItem || this.previousMovieGridItem) {
      this.previousTrailerItem.style.height = '0px';
      this.previousMovieGridItem.style.height = 'auto'
    }
    if (movieGridItem) {
      this.previousMovieGridItem = movieGridItem;
      this.previousTrailerItem = movieTrailerItem;
      movieGridItem.style.height = '800px';
      movieTrailerItem.style.height = '400px';
      movieTrailerItem.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  onLanguageSelect(selectedLanguage: string[]) {
    this.selectedLanguage = selectedLanguage;
    // Resetting lang filters
    this.filters = this.filters.filter(f => f.filterType !== FilterType.Language);
    selectedLanguage.forEach(item => {
      this.filters.push({ filterType: FilterType.Language, value: item });
    });
    this.movies = this.bmsService.filterMovies(this.filters, _.clone(this.bmsService.getMovies()));
  }

  onGenreSelect(selectedGenre: string[]) {
    this.selectedGenre = selectedGenre;
    // Resetting genre filters
    this.filters = this.filters.filter(f => f.filterType !== FilterType.Genre);
    selectedGenre.forEach(item => {
      this.filters.push({ filterType: FilterType.Genre, value: item });
    });
    this.movies = this.bmsService.filterMovies(this.filters, _.clone(this.bmsService.getMovies()));
  }

  removeFilter(filter: Filter) {
    // Reset drop down values
    if (filter.filterType === FilterType.Language) {
      this.selectedLanguage = this.selectedLanguage.filter(item => item !== filter.value);;
    } else if (filter.filterType === FilterType.Genre) {
      this.selectedGenre = this.selectedGenre.filter(item => item !== filter.value);
    }
    this.filters = this.filters.filter(item => item.value != filter.value);
    this.movies = this.bmsService.filterMovies(this.filters, _.clone(this.bmsService.getMovies()));
  }
}
