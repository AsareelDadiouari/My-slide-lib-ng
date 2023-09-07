import {TestBed} from '@angular/core/testing';

import {MySliderService} from './my-slider.service';

describe('MySliderService', () => {
  let service: MySliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
