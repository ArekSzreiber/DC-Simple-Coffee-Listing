import {Component, OnInit} from '@angular/core';
import {Product} from "./products/model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-coffee-listing',
  template: `
    <app-background></app-background>
    <main class="main-card">
      <app-heading></app-heading>
      <div>
        <button>All Products</button>
        <button>Available now</button>
      </div>
      <app-products
        [products]="coffeeList"
      ></app-products>

    </main>
  `,
  styleUrls: ['coffee-listing.component.scss'],
})
export class CoffeeListingComponent implements OnInit {


  coffeeList: Product[] = [];
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
