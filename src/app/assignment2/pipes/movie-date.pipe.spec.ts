import { MovieDatePipe } from './movie-date.pipe';

describe('MovieDatePipe', () => {
  it('create an instance', () => {
    const pipe = new MovieDatePipe();
    expect(pipe).toBeTruthy();
  });
});
