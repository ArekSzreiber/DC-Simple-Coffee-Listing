import { Component } from '@angular/core';

@Component({
  selector: 'app-price-tag',
  template: `
    <div class="tag">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./price-tag.component.scss']
})
export class PriceTagComponent {

}
