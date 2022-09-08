import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    const countryCode = args[0];

    if(typeof value !== 'number') return '-';

    const formattedValue = value.toFixed(2);;
    switch(countryCode) {
      case 'pl': return `${formattedValue} PLN`;
      case 'us': return `$${formattedValue}`;
      default: return formattedValue;
    }


  }

}
