import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CoffeeListingComponent} from './coffee-listing/coffee-listing.component';
import {HeadingComponent} from './coffee-listing/heading/heading.component';

import {NgOptimizedImage} from "@angular/common";
import {BackgroundComponent} from './coffee-listing/background/background.component';
import {ProductsComponent} from './coffee-listing/products/products.component';
import {CardComponent} from "./coffee-listing/products/card/card.component";
import {PopularityTagComponent} from "./coffee-listing/products/card/popularity-tag/popularity-tag.component";
import {PriceTagComponent} from "./coffee-listing/products/card/price-tag/price-tag.component";
import {RatingComponent} from "./coffee-listing/products/card/rating/rating.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListingComponent,
    HeadingComponent,
    CardComponent,
    PopularityTagComponent,
    PriceTagComponent,
    RatingComponent,
    BackgroundComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
