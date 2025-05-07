import { TestBed } from '@angular/core/testing';

import { PatchWareService } from './patch-ware.service';

describe('UpdateWareService', () => {
  let service: PatchWareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatchWareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
