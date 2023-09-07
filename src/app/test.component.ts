import {Component} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <ng-container>
      <div #spinner class="spinner-overlay">
        <p class="large-text">This is some large text with design.</p>
      </div>
    </ng-container>
  `,
  styles: [`
    .spinner-overlay {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      /*justify-content: center;*/
      /*align-items: center;*/
      /*background-color: rgba(0, 0, 0, 0.5); /* Set the background color with transparency */
      z-index: 9999;
    }

    .large-text {
      font-size: 24px; /* Adjust the font size as needed */
      color: #fff; /* Text color */
      background-color: #333; /* Background color */
      padding: 10px 20px; /* Padding around the text */
      border-radius: 5px; /* Rounded corners */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Box shadow for a raised effect */
    }
  `]
})
export class TestComponent {
}
