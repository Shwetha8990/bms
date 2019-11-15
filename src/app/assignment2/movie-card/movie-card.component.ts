import { Component, OnInit, Input } from '@angular/core';
import { MovieEvent } from 'src/app/models/movies';
import { BmsService } from '../services/bms.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: MovieEvent;
  constructor(private bmsService: BmsService) { }

  ngOnInit() {
    console.log(this.movie);
  }

  getImageUrl() {
    return this.bmsService.getImageUrl(this.movie.EventCode);
  }

}
