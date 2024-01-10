import { Component } from '@angular/core';

@Component({
  selector: 'app-heading',
  template: `
    <hgroup class="group">
      <h1>Our Collection</h1>
      <p class="description">
        Introducing our Coffee Collection, a selection of unique coffees
        from different roast types and origins, expertly roasted in small
        batches and shipped fresh weekly.</p>
    </hgroup>

  `,
  styles: [`

    .group {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .description {
      word-wrap: break-word;
      max-width: 500px;
    }
  `],
})
export class HeadingComponent {

}
