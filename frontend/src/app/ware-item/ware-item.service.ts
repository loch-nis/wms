import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Ware } from '../interfaces/ware';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WareItemService {

  constructor(private http: HttpClient) { }

  getWareByBarcode(barcode: string) : Observable<Ware>
  {
    return this.http.get<Ware>(`${environment.apiUrl}/${barcode}`).pipe(
      catchError((error : HttpErrorResponse) => {
        const err = {
          message: "Error getting ware by barcode",
          status: error.status,
          statusText: error.statusText,
        };
        return throwError(() => err);
      })
    );
  }
}
