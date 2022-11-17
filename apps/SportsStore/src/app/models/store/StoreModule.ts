import { NgModule } from '@angular/core';
import { ModelModule } from '../ModelModule';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store.component';
import {CartSummaryComponent} from "../cart-summary/cart-summary.component";
import {CartDetailComponent} from "../../cart-detail/cart-detail.component";
import {CheckoutComponent} from "../../checkout/checkout.component";
import {RouterLink, RouterModule} from "@angular/router";



@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterLink, RouterModule],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent],
  declarations: [StoreComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
})
export class StoreModule {}
