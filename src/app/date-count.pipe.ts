import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCountPipe'
})
export class DateCountPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return null;
  }

}
