import { TestBed } from '@angular/core/testing';

import { UpdateRecentlyScannedService } from './update-recently-scanned.service';

describe('UpdateRecentlyScannedService', () => {
  let service: UpdateRecentlyScannedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateRecentlyScannedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
