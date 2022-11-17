import {Component} from '@angular/core';
import {Cart} from "../cart/Cart";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',

})
export class CartSummaryComponent {
  constructor(public cart: Cart) {
  }


  checkout() {
    this.cart.clear();
  }
}
