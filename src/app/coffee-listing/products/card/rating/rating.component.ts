import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
    <div class="container">
      <ng-container *ngIf="votes" >
        <img src="assets/Star_fill.svg">
        <span class="rating">{{rating}}</span>
        <span class="votes">{{'(' + votes + ' votes)'}}</span>
      </ng-container>

      <ng-container *ngIf="!votes">
        <img src="assets/Star.svg">
        <span class="votes">No ratings</span>
      </ng-container>
    </div>


  `,
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() rating?: number;
  @Input() votes!: number;
}
