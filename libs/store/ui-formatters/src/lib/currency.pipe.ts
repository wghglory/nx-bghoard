import { Pipe, PipeTransform } from '@angular/core';
import { currencyFormat } from '@nx-bghoard/shared/util-formatters';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {
  transform(amount: number, ...args: any[]): string {
    return currencyFormat(amount);
  }
}
