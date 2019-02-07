import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingModule } from './views/landing/landing.module';
import { LandingComponent } from './views/landing/landing/landing.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'book',
        loadChildren: './views/book-views/book-views.module#BookViewsModule'
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        LandingModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
