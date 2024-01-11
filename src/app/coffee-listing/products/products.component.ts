import {Component, Input} from '@angular/core';
import {Product} from "./model";

@Component({
  selector: 'app-products',
  template: `
    <div class="container">
      <app-card
        *ngFor="let product of products; trackBy: trackById"
        [product]="product"
        [class.hidden]="showOnlyAvailable && !product.available"
      ></app-card>
      <!--For last items to fit the grid. Number of columns - 1 "empty cards" are needed-->
      <div *ngFor="let i of Array(2)"
        style="width: 260px; height: 258px"
      ></div>
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

    .hidden {
      display: none;
    }

  `]
})
export class ProductsComponent {
  @Input() products?: Product[];
  @Input() showOnlyAvailable?: boolean;
  trackById(index: number, product: Product): number {
    return product.id;
  }

  protected readonly Array = Array;
}
