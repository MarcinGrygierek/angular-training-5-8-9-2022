import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = value - minutes * 60;

    const fullMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const fullSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${fullMinutes}:${fullSeconds}`;
  }

}
