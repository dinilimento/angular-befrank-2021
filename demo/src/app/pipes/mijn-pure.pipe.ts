import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mijnpure',
})
export class MijnPurePipe implements PipeTransform {
  transform(value: any): unknown { // oldValue === newValue
    console.log('[pure] nieuwe transform');
    return `pure: ${value.name}`;
  }
}
