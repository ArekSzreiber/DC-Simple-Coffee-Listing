import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
    <div *ngIf="votes">
      <img src="assets/Star_fill.svg">
      <span class="rating">{{ rating }}</span>
      <span class="votes">{{ '(' + votes + ' votes)' }}</span>
    </div>

    <div *ngIf="!votes">
      <img src="assets/Star.svg">
      <span class="votes">No ratings</span>
    </div>
  `,
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() rating?: number;
  @Input() votes!: number;
}
