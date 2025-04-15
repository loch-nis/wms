import { TestBed } from '@angular/core/testing';

import { updateBarcode } from './update-barcode.service';

describe('TransferBarcodeValueToCreateWareFormService', () => {
  let service: updateBarcode;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(updateBarcode);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
