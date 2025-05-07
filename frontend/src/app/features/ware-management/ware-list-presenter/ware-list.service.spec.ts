import { TestBed } from '@angular/core/testing';

import { WareListService } from './ware-list.service';

describe('WareListService', () => {
  let service: WareListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WareListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
