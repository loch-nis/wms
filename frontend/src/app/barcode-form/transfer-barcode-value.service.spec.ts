import { TestBed } from '@angular/core/testing';

import { TransferBarcodeValue } from './transfer-barcode-value.service';

describe('TransferBarcodeValueToCreateWareFormService', () => {
  let service: TransferBarcodeValue;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferBarcodeValue);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
