import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mijnimpure',
  
  // bij iedere change detection cycle wordt deze nu aangeroepen
  // dit kan dus een impact hebben op de performance
  pure: false,
})
export class MijnImpurePipe implements PipeTransform {
  transform(value: any): unknown {
    console.log('[impure] nieuwe transform');
    return `impure: ${value.name}`;
  }
}
