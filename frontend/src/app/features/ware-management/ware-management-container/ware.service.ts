import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Ware } from '../../../core/models/ware.model';
import { Observable } from 'rxjs';

// todo are ther eother ways of doing providedin? what does null-provided mean?

@Injectable({
  providedIn: 'root'
})
export class WareService {

  constructor() {}

  private http = inject(HttpClient);

  //TODO I really think I will end up putting all rxResource logic in here. 
  // The questions is how
  // and whether I can/should avoid having signals in this service??
  // TODO NO I think what im doing now is fine actually?!?!

  getAll() : Observable<Ware[]>
  {
    return this.http.get<Ware[]>(`${environment.apiUrl}`);
  }

  getByBarcode(barcode: string) : Observable<Ware>
  {
    return this.http.get<Ware>(`${environment.apiUrl}/${barcode}`);
  }

  post(data : any) : Observable<object>
  {
    return this.http.post(`${environment.apiUrl}`, data);


    /* for later implement somehow:
     this.snackBar.open("New ware successfully created!", "Close", {
      duration: 3000 */
  }

  patch(barcode: string, quantityDelta : any) : Observable<object>
  {
    const data = { quantityDelta };
    return this.http.patch(`${environment.apiUrl}/${barcode}`, data);
    // add error handling, perhaps using snackbars like above

    /*this.snackBar.open("Ware successfully updated!", "Close", {
          duration: 1500
        });*/
  }


  delete(barcode: string) : Observable<object>
  {
    return this.http.delete(`${environment.apiUrl}/${barcode}`);
  }

}
