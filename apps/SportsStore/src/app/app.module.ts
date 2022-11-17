import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CartComponent} from './models/cart/cart.component';
import {StoreModule} from "./models/store/StoreModule";
import {RouterModule} from "@angular/router";
import {StoreComponent} from "./models/store/store.component";
import {CartDetailComponent} from "./cart-detail/cart-detail.component";
import {StoreFirstGuard} from "./Routers/store-first-guard.service";


@NgModule({
  imports: [BrowserModule, StoreModule,
    RouterModule.forRoot([
      {
        path: "store", component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "cart", component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      }, {},
      {path: "**", redirectTo: "/store"}
    ])],
  declarations: [
    AppComponent,
    CartComponent,


  ],

  providers: [StoreFirstGuard],
  bootstrap: [AppComponent],
})
export class AppModule {
}
