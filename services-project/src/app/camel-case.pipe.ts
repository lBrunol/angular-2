import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  ignoredWords: Array<string> = ['de', 'da', 'das', 'o', 'os', 'a', 'as', 'do', 'dos', 'e', 'para', 'por', 'à', 'às'];

  transform(value: any, args?: any): any {
    
    let values = value.split(' ');
    let result = '';

    for( let v of values ) {
      result += this.captalize(v) + ' ';
    }

    return result;
  }

  captalize(val: string) {
    
    if(this.ignoredWords.indexOf(val.toLowerCase()) === -1 )
      return val.substr(0,1).toUpperCase() + val.substr(1);
    else
      return val.toLowerCase();
  }

}
