import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CustomerComponent } from './customer/customer.component';

import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,

    CustomerComponent
    OrderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
