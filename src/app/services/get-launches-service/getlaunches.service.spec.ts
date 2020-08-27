import { TestBed } from '@angular/core/testing';

import { GetlaunchesService } from './getlaunches.service';

describe('GetlaunchesService', () => {
  let service: GetlaunchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetlaunchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
