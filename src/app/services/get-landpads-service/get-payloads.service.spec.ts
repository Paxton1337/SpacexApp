import { TestBed } from '@angular/core/testing';

import { GetLandpadsService } from './getLandpads.service';

describe('GetPayloadsService', () => {
  let service: GetLandpadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLandpadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
