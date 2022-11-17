import { Component } from "@angular/core";
import {Cart} from "../models/cart/Cart";
@Component({
  template: './cart-detail.component.html',
})
export class CartDetailComponent {

  constructor(public cart: Cart) { }

}
