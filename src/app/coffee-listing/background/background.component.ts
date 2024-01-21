import { Component } from '@angular/core';

// noinspection HtmlUnknownTarget
@Component({
  selector: 'app-background',
  template: `
    <div class="container">
      <img class="background-image" ngSrc="assets/bg-cafe.jpg" alt="" height="600" width="2560">
    </div>
  `,
  styles: [`
    .background-image {
      position: absolute;
      z-index: -1;
      max-width: 100vw;
      min-width: 1280px;
      width: auto;
      height: auto;
    }

    .container {
      display: flex;
      justify-content: center;
      max-width: 100vw;
    }

  `]
})
export class BackgroundComponent {

}
