import { Component } from '@angular/core';

@Component({
  selector: 'app-tag',
  template: `
    <span class="tag"><ng-content></ng-content></span>
  `,
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {

}
