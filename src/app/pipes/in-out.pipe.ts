import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inOut'
})
export class InOutPipe implements PipeTransform {

  transform(inOut: number, arrival: boolean): any {
    if (arrival) {
      if(inOut===0){
        return 'Arrival';
      } else if(inOut===1){
        return 'Despatch';
      }
    } else {
      if(inOut===0){
        return 'To';
      } else if(inOut===1){
        return 'From';
      }
    }

  }

}
