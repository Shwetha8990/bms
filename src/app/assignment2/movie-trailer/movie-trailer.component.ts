import { Component, OnInit, Input } from '@angular/core';
import { MovieEvent } from '../../models/movie';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.scss']
})
export class MovieTrailerComponent implements OnInit {

  @Input() movie: MovieEvent;

  private embedCorrectionRegex = `https:\/\/www\.youtube\.com\/watch\?v=`;
  private embedCorrectionReplace = `https://www.youtube.com/embed/`;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log('test');
  }

  getUrl(videoUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl.replace(this.embedCorrectionRegex, this.embedCorrectionReplace));
  }

  getGenres(genres: string): string[] {
    return genres.split('|');
  }

  getDate(dateString: string): string {
    return dateString.split(',')[0];
  }

  getYear(dateString: string): string {
    return dateString.split(',')[1]
  }

}
