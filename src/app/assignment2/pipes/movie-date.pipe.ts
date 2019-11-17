import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'movieDate'
})
export class MovieDatePipe implements PipeTransform {

  transform(value: any): string {
    const movieDate = moment(value, 'DD MMM, YYYY');
    if (movieDate.year() === moment().year()) {
      return `<b>${movieDate.date()}</b><div>${movieDate.format('MMM')}</div>`
    } else {
      return `<b>${movieDate.format('MMM')}</b><div>${movieDate.year()}</div>`
    }
  }

}
