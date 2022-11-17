import {Component} from '@angular/core';
import {ProductRepository} from '../Product/ProductRepository';
import {Product} from "../Product/Product";
import {Cart} from "../cart/Cart";
import {Router} from "@angular/router";

@Component({
  selector: 'store',
  templateUrl: 'store.component.html'
})
export class StoreComponent {
  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;


  constructor(private repo: ProductRepository, private cart: Cart, private router: Router) {

  }


  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
    return this.repo.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): any[] {
    return this.repo.getCategories();
  }

  changeCategory(newCategory?: any) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: any) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  /**
   * It creates an array of numbers, the length of which is the number of pages, and then maps each number to the page
   * number
   * @returns An array of numbers.
   */
  get pageNumbers(): number[] {
    return Array(Math.ceil(this.repo.getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((x, i) => i + 1);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart").then(r => console.log(r));
  }

}
