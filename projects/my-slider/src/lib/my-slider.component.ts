import {Component, ComponentRef, ElementRef, inject, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'lib-my-slider',
  template: `
    <div class="slider-host" sliderHost [items]="_items"></div>
  `,
  styles: [
    `
      .slider-host {
        display: flex;
        overflow: hidden;
        width: 100%;
        position: relative;
      }

      .slide {
        flex: 0 0 auto;
        width: 100%;
        transition: transform 0.3s ease-in-out;
      }

      .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        cursor: pointer;
      }

      .prev-button {
        left: 10px;
      }

      .next-button {
        right: 10px;
        /*transform: rotate(180deg);*/
      }
    `
  ]
})
export class MySliderComponent implements OnInit{
  protected _items: (ComponentRef<any> | string)[] = [];
  renderer = inject(Renderer2);
  el = inject(ElementRef);
  private currentSlideIndex = 0;
  @Input() set items(items: (ComponentRef<any> | string)[]) {
    this._items = items;
  }

  ngOnInit() {
    this.showSlide(this.currentSlideIndex);
    this.createNavigationButtons();
  }

  private createNavigationButtons() {
    const prevButton = this.renderer.createElement('button');
    this.renderer.addClass(prevButton, 'nav-button');
    this.renderer.addClass(prevButton, 'prev-button');
    prevButton.innerHTML = '&#9664;';
    prevButton.addEventListener('click', () => this.slideToPrevious());

    const nextButton = this.renderer.createElement('button');
    this.renderer.addClass(nextButton, 'nav-button');
    this.renderer.addClass(nextButton, 'next-button');
    nextButton.innerHTML = '&#9654;';
    nextButton.addEventListener('click', () => this.slideToNext());

    this.renderer.appendChild(this.el.nativeElement, prevButton);
    this.renderer.appendChild(this.el.nativeElement, nextButton);
  }

  private slideToPrevious() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this._items.length) % this._items.length;
    this.showSlide(this.currentSlideIndex);
  }

  private slideToNext() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this._items.length;
    this.showSlide(this.currentSlideIndex);
  }

  private showSlide(index: number) {
    const slides = this.el.nativeElement.querySelectorAll('.slide');
    slides.forEach((slide: any, slideIndex: number) => {
      if (slideIndex === index) {
        slide.style.transform = 'translateX(0)';
      } else {
        slide.style.transform = 'translateX(-100%)';
      }
    });
  }
}
