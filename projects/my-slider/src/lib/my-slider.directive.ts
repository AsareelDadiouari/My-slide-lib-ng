import {ComponentRef, Directive, ElementRef, inject, Input, OnInit, Renderer2, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[sliderHost]',
})
export class MySliderDirective implements OnInit {
  viewContainerRef = inject(ViewContainerRef);
  renderer = inject(Renderer2);
  el = inject(ElementRef)

  protected _items: (ComponentRef<any> | string)[] = [];

  @Input('items') set items(items: (ComponentRef<any> | string)[]) {
    this._items = items;
    this.clearImages();
    if (typeof this._items[0] === 'string') {
      for (const item of this._items) {
        this.loadImage(<string>item);
      }
    }
  }

  ngOnInit() {
    for (const item of this._items) {
      this.loadComponent(<ComponentRef<any>>item);
    }
    console.log(this.el.nativeElement);
  }

  loadComponent(item: ComponentRef<any>) {
    if (item)
      this.viewContainerRef.insert(item.hostView);
  }

  loadImage(image: string) {
    if (!this.validBase64Image(image)) {
      throw new Error('Invalid base64 image format');
    }

    if (image) {
      const imgElement = this.renderer.createElement('img');

      this.renderer.setAttribute(imgElement, 'src', image);
      this.renderer.appendChild(this.el.nativeElement, imgElement);
    }
  }

  private validBase64Image(str: string): boolean {
    const base64ImageRegex = /^data:image\/([a-zA-Z]*);base64,([^\"]*)$/;
    return base64ImageRegex.test(str);
  }

  private clearImages() {
    while (this.el.nativeElement.firstChild) {
      this.renderer.removeChild(this.el.nativeElement, this.el.nativeElement.firstChild);
    }
  }
}
