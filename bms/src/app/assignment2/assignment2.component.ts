import { Component, OnInit } from '@angular/core';
import { BmsService } from './services/bms.service';
import { MovieEvent } from '../models/movies';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.scss']
})
export class Assignment2Component implements OnInit {

  movies: MovieEvent[];
  constructor(private bmsService: BmsService) { }


  ngOnInit() {
    this.getComingSoonMovies();
  }

  getComingSoonMovies() {
    this.bmsService.getComingSoonMovies().subscribe(res => {
      this.movies = res.movies;
    })
  }

}
