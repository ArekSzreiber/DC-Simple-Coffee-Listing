import {Component, Input} from '@angular/core';
import {Product} from "../model";

@Component({
  selector: 'app-card',
  template: `
    <div class="container">

      <app-tag
        *ngIf="product.popular"
        class="popular-tag"
      >Popular</app-tag>

      <img
        class="image"
        [ngSrc]="product.image"
        width="260"
        height="160"
        [alt]="product.name"
      >

      <div class="title">
        <span class="name">{{ product.name }}</span>
      </div>

      <div class="price">
        <app-price-tag>
          {{ product.price }}
        </app-price-tag>
      </div>

      <div class="rating">
        <app-rating
          [rating]="product.rating"
          [votes]="product.votes"
        ></app-rating>
      </div>

      <div class="sold">
        <span *ngIf="!product.available">Sold out</span>
      </div>


      <!--      {{product | json}}-->
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product!: Product;

}
