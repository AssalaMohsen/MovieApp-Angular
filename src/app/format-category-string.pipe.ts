import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCategoryString'
})
export class FormatCategoryStringPipe implements PipeTransform {

  transform(categoryString:any): string {
    var str = categoryString.replaceAll('_',' ');
     var separateWord = str.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
     return separateWord.join(' ');
  }

}
