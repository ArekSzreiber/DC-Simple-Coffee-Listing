import {Component, OnInit} from '@angular/core';
import {Product} from "./products/model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-coffee-listing',
  template: `
    <app-background></app-background>
    <div class="container">
      <main class="main-card">

        <app-heading></app-heading>

        <div>
          <button
            class="button"
            [class.selected]="!onlyAvailable"
            (click)="onlyAvailable = false"
          >All Products
          </button>
          <button
            class="button"
            [class.selected]="onlyAvailable"
            (click)="onlyAvailable = true"
          >Available now
          </button>
        </div>

        <app-products
          [products]="coffeeList"
          [showOnlyAvailable]="onlyAvailable"
        ></app-products>

      </main>
    </div>

  `,
  styleUrls: ['coffee-listing.component.scss'],
})
export class CoffeeListingComponent implements OnInit {


  coffeeList: Product[] = [];
  onlyAvailable: boolean = false;
  constructor(
    private http: HttpClient,
  ) {
  }
  ngOnInit(): void {
  this.http.get<Product[]>('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
    .subscribe((response: Product[]) => {
      this.coffeeList = response;
    })
  }



}
