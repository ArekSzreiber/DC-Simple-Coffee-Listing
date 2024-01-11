import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {BackgroundComponent} from './coffee-listing/background/background.component';
import {CardComponent} from "./coffee-listing/products/card/card.component";
import {CoffeeListingComponent} from './coffee-listing/coffee-listing.component';
import {HeadingComponent} from './coffee-listing/heading/heading.component';
import {TagComponent} from "./coffee-listing/products/card/tag/tag.component";
import {PriceTagComponent} from './coffee-listing/products/card/price-tag/price-tag.component';
import {ProductsComponent} from './coffee-listing/products/products.component';
import {RatingComponent} from './coffee-listing/products/card/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    CardComponent,
    CoffeeListingComponent,
    HeadingComponent,
    TagComponent,
    PriceTagComponent,
    ProductsComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
