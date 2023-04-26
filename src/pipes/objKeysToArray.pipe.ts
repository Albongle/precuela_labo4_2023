import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ObjKeysToArray' })
export class ObjKeysToArrayPipe implements PipeTransform {
  transform(value: any) {
    return Object.keys(value);
  }
}
