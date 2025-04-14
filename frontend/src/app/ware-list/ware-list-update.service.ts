import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WareListUpdateService {
  private updateSubject = new Subject<void>();
  update$ = this.updateSubject.asObservable();

  triggerUpdate() {
    this.updateSubject.next();
  }
}
