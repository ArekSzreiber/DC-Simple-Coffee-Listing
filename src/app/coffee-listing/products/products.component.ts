import {Component, Input} from '@angular/core';
import {Product} from "./model";

@Component({
  selector: 'app-products',
  template: `
<!--    <p>products works!</p>-->
<!--    {{showOnlyAvailable}}-->
<!--    {{products | json}}-->
<div class="container">
  <app-card
    *ngFor="let product of products; trackBy: trackById"
    [product]="product"
  ></app-card>
</div>

  `,
  styles: [`
    .container {
      max-width: 1100px;
      padding-top: 30px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px 30px;
    }
  `]
})
export class ProductsComponent {
  @Input() products?: Product[];
  @Input() showOnlyAvailable?: boolean;
  trackById(index: number, product: Product): number {
    return product.id;
  }
}
