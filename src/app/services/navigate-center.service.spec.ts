import { TestBed } from '@angular/core/testing';

import { NavigateCenterService } from './navigate-center.service';

describe('NavigateCenterService', () => {
  let service: NavigateCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigateCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
