import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CityPreviewComponent } from './demo/city-preview/city-preview.component';
import { DemoComponent } from './demo/demo/demo.component';
import { ReactiveFormDemoComponent } from './demo/reactive-form-demo/reactive-form-demo.component';

@NgModule({
    declarations: [
        AppComponent,
        CityPreviewComponent,
        DemoComponent,
        ReactiveFormDemoComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
