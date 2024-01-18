import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marketName'
})
export class MarketNamePipe implements PipeTransform {

  markets = [
    { id: 'amazon_price', name: 'www.amazon.com'},
    { id: 'cardmarket_price', name: 'www.cardmarket.com'},
    { id: 'coolstuffinc_price', name: 'www.coolstuffinc.com'},
    { id: 'ebay_price', name: 'www.ebay.com'},
    { id: 'tcgplayer_price', name: 'www.tcgplayer.com'}
  ];

  transform(value: string): string {
    const market = this.markets.find( m => m.id === value);
    return market?.name || '';
  }

}
