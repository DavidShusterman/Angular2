import {Component} from '@angular/core';
import {ProductService} from './products/product.service'
@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1></div>
    <pm-products></pm-products>
    `,
    providers: [ProductService]
})

export class AppComponent {
    pageTitle: string = 'David Shusterman\'s First Angular 2 Application';
} 