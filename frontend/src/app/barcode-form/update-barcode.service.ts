import {Injectable, signal} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// todo how do injectables work?
@Injectable({
  // todo are ther eother ways of doing providedin? what does null-provided mean?
  providedIn: 'root'
})
export class UpdateBarcodeService {

  // todo are there other ways of holding state than behavioursubjects?
  // todo how do we work with signals?
  // todo how do we work with signals?
  // todo how do we work with signals?
  private barcodeSubject = new BehaviorSubject<string | null>(null);
  barcode$ = this.barcodeSubject.asObservable();

  setBarcode(barcode: string): void {
    this.barcodeSubject.next(barcode);
  }
}
