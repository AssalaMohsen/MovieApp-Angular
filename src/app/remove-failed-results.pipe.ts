import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeFailedResults'
})
export class RemoveFailedResultsPipe implements PipeTransform {

  transform(arr:Array<any>): Array<any>{
    return arr.filter((element:any)=>{
      return element.poster_path != null && element.vote_average !=0;
    });
  }

}
