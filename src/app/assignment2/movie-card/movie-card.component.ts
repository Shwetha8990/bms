import { Component, OnInit, Input } from '@angular/core';
import { BmsService } from '../services/bms.service';
import { MovieEvent } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: MovieEvent;
  @Input() selected = false;
  constructor(private bmsService: BmsService) { }

  ngOnInit() {
  }

  getImageUrl() {
    return this.bmsService.getImageUrl(this.movie.EventCode);
  }
}
