import { TestBed } from '@angular/core/testing';

import { CreateWareService } from './create-ware.service';

describe('PostWareService', () => {
  let service: CreateWareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateWareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
