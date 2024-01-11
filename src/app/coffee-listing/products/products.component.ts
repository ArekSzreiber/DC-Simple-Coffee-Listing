import {Component, Input} from '@angular/core';
import {Product} from "./model";

@Component({
  selector: 'app-products',
  template: `
<!--    <p>products works!</p>-->
<!--    {{showOnlyAvailable}}-->
<!--    {{products | json}}-->
    <app-card
      *ngFor="let product of products; trackBy: trackById"
        [product]="product"
    ></app-card>
  `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() products?: Product[];
  @Input() showOnlyAvailable?: boolean;
  trackById(index: number, product: Product): number {
    return product.id;
  }
}
