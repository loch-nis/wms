import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateRecentlyScannedService {

  private barcodeSource = new BehaviorSubject<string | null>(null);
  barcode$ = this.barcodeSource.asObservable();

  setBarcode(barcode : string)
  {
    this.barcodeSource.next(barcode);
    console.log("barcode set to:", barcode);
  }
}
