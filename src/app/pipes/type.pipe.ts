import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(type: number): any {
    if(type===0){
      return 'A';
    }else if(type===1){
      return 'B';
    }else if(type===2){
      return 'C';
    }
  }

}
