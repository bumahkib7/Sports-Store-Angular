import { NgModule } from '@angular/core';
import { ProductRepository } from './Product/ProductRepository';
import { StaticDataSource } from './StaticDataSource';
import {Cart} from "./cart/Cart";

@NgModule({
  providers: [ProductRepository, StaticDataSource, Cart]
})
export class ModelModule {}
