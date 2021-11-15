import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(timeString:string): string {
    var num = parseInt(timeString);
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return `${rhours!=0 ? rhours+'h,' : ''} ${rminutes!=0 ? rminutes+'m' : ''}`;
  }

}
