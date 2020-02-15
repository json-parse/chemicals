import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from '../entities';

@Pipe({
  name: 'warehouse'
})
export class WarehousePipe implements PipeTransform {

  transform(entries: Entry[], whnr: number): any {
    return entries.filter(t => t.warehouse == whnr);
  }

}
