import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferBarcodeValue {

  private barcodeValueSubject = new BehaviorSubject<string | null>(null);
  barcodeValue$ = this.barcodeValueSubject.asObservable();
  
  setBarcodeValue(barcode: string): void {
    this.barcodeValueSubject.next(barcode);
  }
  
  getBarcodeValue(): string | null {
    return this.barcodeValueSubject.getValue();
  }
}
