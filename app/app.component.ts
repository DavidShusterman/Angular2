import {Component} from '@angular/core';
import {HttpModule} from '@angular/http';
import {ProductService} from './products/product.service'

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1></div>
    <pm-products></pm-products>
    `,
    providers: [ProductService,HttpModule]
})

export class AppComponent {
    pageTitle: string = 'David Shusterman\'s First Angular 2 Application';
} 