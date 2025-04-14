import { TestBed } from '@angular/core/testing';

import { WareItemService } from './ware-item.service';

describe('WareService', () => {
  let service: WareItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WareItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
