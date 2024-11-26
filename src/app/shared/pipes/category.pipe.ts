import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
     switch(value){
      case 'casa': return 'code';
      case 'trabalho': return 'computer';
    }
    return 'code';
  }

}
