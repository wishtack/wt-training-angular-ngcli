import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSearchModule } from './book-search/book-search.component';
import { CartComponent } from './cart/cart.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemModule } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ItemFormComponent
  ],
  imports: [
    BookSearchModule,
    /* required by CartComponent meanwhile we move it to CartModule */
    ItemModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
