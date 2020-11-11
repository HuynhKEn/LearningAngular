import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'if'
})
export class IfPipe implements PipeTransform {
    transform(values: any[], exponent: boolean): any[] {
      if (!exponent) {
        return[];
      }
      return values;
    }

}
