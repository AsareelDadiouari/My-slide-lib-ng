import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MySliderComponent} from './my-slider.component';

describe('MySliderComponent', () => {
  let component: MySliderComponent;
  let fixture: ComponentFixture<MySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySliderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
