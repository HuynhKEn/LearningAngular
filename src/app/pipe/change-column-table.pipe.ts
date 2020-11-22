
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
      return 'id'
    }
    if (values === 'SRC_PATH'){
      return 'link'
    }
    if (values === 'FILE_TYPE'){
      return 'fileType'
    }
    return values.toLowerCase();
  }
}
