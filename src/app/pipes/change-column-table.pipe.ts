
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'changeColumnTable'
})
export class ChangeColumnTable implements PipeTransform {
  transform(values: string, exponent?: boolean): string {
    if (values === 'DURATION') {
      return 'videoTime';
    }
    if (values === 'NO'){
      return 'id';
    }
    if (values === 'SRC_PATH'){
      return 'link';
    }
    if (values === 'FILE_TYPE'){
      return 'fileType';
    }
    if (values === 'START_DATE'){
      return 'startDate';
    }
    if (values === 'END_DATE'){
      return 'endDate';
    }
    return values.toLowerCase();
  }
}
