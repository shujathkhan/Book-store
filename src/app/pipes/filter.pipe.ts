import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../products/product.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], language_code: string): any {
    if (language_code === 'all') {
      return products;
    } 
    else if (language_code === 'eng') {
      return products.filter(product => {
        return product.language_code === language_code;
      });
    } 
    else {
      return products.filter(product => {
        return product.language_code != 'eng';
      });
    }
  }
}







