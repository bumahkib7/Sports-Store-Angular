import { Injectable } from '@angular/core';
import { StaticDataSource } from '../StaticDataSource';
import { Product } from './Product';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: any[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data
        .map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getProducts(category: any = null): Product[] {
    return this.products.filter(
      p => category == null || category == p.category
    );
  }



  getCategories(): string[] {
    return this.categories;
  }
}
