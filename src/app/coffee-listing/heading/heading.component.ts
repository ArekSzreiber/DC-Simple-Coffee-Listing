import { Component } from '@angular/core';

@Component({
  selector: 'app-heading',
  template: `
    <hgroup class="group">
      <h1 class="heading">Our Collection</h1>
      <p class="description body">
        Introducing our Coffee Collection, a selection of unique coffees
        from different roast types and origins, expertly roasted in small
        batches and shipped fresh weekly.</p>
    </hgroup>

  `,
  styleUrls: ['heading.component.scss'],
})
export class HeadingComponent {

}
