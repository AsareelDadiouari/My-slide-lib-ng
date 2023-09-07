import {Component, ComponentRef, createComponent, EnvironmentInjector, inject, OnInit,} from '@angular/core';
import {TestComponent} from "./test.component";
import {Observable, zip} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
    <input type="file" multiple (change)="onFileSelected($event)">
    <lib-my-slider [items]="components"></lib-my-slider>
    <lib-my-slider [items]="images"></lib-my-slider>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MySliderLib';
  images: string[] = []
  components: ComponentRef<any>[] = [];
  envInjector = inject(EnvironmentInjector); // Since ComponentFactoryResolver is deprecated

  ngOnInit() {
    const component1 = createComponent(TestComponent, {environmentInjector: this.envInjector});
    const component2 = createComponent(TestComponent, {environmentInjector: this.envInjector});

    this.components.push(...[component1, component2]);
  }

  onFileSelected($event: Event) {
    const selectedFiles: FileList | null = ($event.target as HTMLInputElement).files;
    let filesEvents$: Observable<any>[] = [];

    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        filesEvents$.push(new Observable<string>(observer => {
          const file: File = selectedFiles[i];
          const reader = new FileReader();

          reader.onload = (e: any) => {
            const base64Data: string = e.target.result;
            this.images.push(base64Data);
            observer.next(base64Data);
            observer.complete();
          };
          reader.readAsDataURL(file);
        }))
      }
    }

    zip(...filesEvents$).subscribe(images => {
      this.images = images
    })
  }
}
