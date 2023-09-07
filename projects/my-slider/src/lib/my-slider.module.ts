import {NgModule} from '@angular/core';
import {MySliderComponent} from './my-slider.component';
import {MySliderDirective} from "./my-slider.directive";

@NgModule({
  declarations: [
    MySliderComponent,
    MySliderDirective,
  ],
  exports: [
    MySliderComponent,
    MySliderDirective,
  ]
})
export class MySliderModule {
}
