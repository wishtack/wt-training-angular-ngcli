import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { SandwichFormComponent } from './sandwich/sandwich-form/sandwich-form.component';
import { SandwichPreviewComponent } from './sandwich/sandwich-preview/sandwich-preview.component';
import { SandwichSearchComponent } from './sandwich/sandwich-search/sandwich-search.component';

@NgModule({
    declarations: [
        AppComponent,
        SandwichPreviewComponent,
        CartDetailComponent,
        SandwichFormComponent,
        SandwichSearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
