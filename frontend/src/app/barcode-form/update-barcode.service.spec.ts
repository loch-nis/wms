import { TestBed } from '@angular/core/testing';

import { UpdateBarcodeService } from './update-barcode.service';

describe('TransferBarcodeValueToCreateWareFormService', () => {
  let service: UpdateBarcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateBarcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
