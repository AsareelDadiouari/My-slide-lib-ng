import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MySliderModule} from "my-slider";
import {TestComponent} from './test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    MySliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
