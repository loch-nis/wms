import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateBarcodeService {

  private barcodeSubject = new BehaviorSubject<string | null>(null);
  barcode$ = this.barcodeSubject.asObservable();
  
  setBarcode(barcode: string): void {
    this.barcodeSubject.next(barcode);
  }
}
