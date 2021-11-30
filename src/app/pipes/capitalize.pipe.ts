import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
    transform(items: any): any {
      if ( typeof(items) === 'string') {
        return items[0].toUpperCase() + items.substr(1).toLowerCase();
    }
      return items;
    }
}
