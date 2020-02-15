import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msgbtn'
})
export class MsgbtnPipe implements PipeTransform {

  transform(msgbtn : string): any {
    if(!msgbtn){
      return 'Add';
    }else{
      return 'Edit';
    }
  }

}
