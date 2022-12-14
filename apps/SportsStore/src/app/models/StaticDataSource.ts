import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { Product } from './Product/Product';

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100),
    new Product(2, 'Product 2', 'Category 1', 'Product 2 (Category 1)', 100),
    new Product(3, 'Product 3', 'Category 1', 'Product 3 (Category 1)', 100),
    new Product(4, 'Product 4', 'Category 1', 'Product 4 (Category 1)', 100),
    new Product(5, 'Product 5', 'Category 1', 'Product 5 (Category 1)', 100),
    new Product(6, 'Product 6', 'Category 2', 'Product 6 (Category 2)', 100),
    new Product(7, 'Product 7', 'Category 2', 'Product 7 (Category 2)', 100),
    new Product(8, 'Product 8', 'Category 2', 'Product 8 (Category 2)', 100),
    new Product(9, 'Product 9', 'Category 2', 'Product 9 (Category 2)', 100),
    new Product(10, 'Product 10', 'Category 2', 'Product 10 (Category 2)', 100),
    new Product(11, 'Product 11', 'Category 3', 'Product 11 (Category 3)', 100),
    new Product(12, 'Product 12', 'Category 3', 'Product 12 (Category 3)', 100),
    new Product(13, 'Product 13', 'Category 3', 'Product 13 (Category 3)', 100),
    new Product(14, 'Product 14', 'Category 3', 'Product 14 (Category 3)', 100),
    new Product(15, 'Product 15', 'Category 3', 'Product 15 (Category 3)', 100),
    new Product(16, 'Product 16', 'Category 4', 'Product 16 (Category 4)', 100),
    new Product(17, 'Product 17', 'Category 4', 'Product 17 (Category 4)', 100),
    new Product(18, 'Product 18', 'Category 4', 'Product 18 (Category 4)', 100),
    new Product(19, 'Product 19', 'Category 4', 'Product 19 (Category 4)', 100),
    new Product(20, 'Product 20', 'Category 4', 'Product 20 (Category 4)', 100),
    new Product(21, 'Product 21', 'Category 5', 'Product 21 (Category 5)', 100)
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }
}
