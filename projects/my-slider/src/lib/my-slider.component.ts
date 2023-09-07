import {Component, ComponentRef, Input} from '@angular/core';

@Component({
  selector: 'lib-my-slider',
  template: `
    <div sliderHost [items]="_items"></div>
  `,
  styles: []
})
export class MySliderComponent {
  protected _items: (ComponentRef<any> | string)[] = [];

  @Input() set items(items: (ComponentRef<any> | string)[]) {
    this._items = items;
  }
}
