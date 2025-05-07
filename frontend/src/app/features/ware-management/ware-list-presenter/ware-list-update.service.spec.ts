import { TestBed } from '@angular/core/testing';

import { WareListUpdateService } from './ware-list-update.service';

describe('WareListUpdateService', () => {
  let service: WareListUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WareListUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
