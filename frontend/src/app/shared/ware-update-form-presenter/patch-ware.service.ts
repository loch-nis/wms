import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Ware } from '../../core/models/ware.model';
import { MatSnackBar } from '@angular/material/snack-bar';

// todo (var et andet sted før, i obsolete updateBarcode):
@Injectable({
  providedIn: 'root'
})
export class PatchWareService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) { }

  patchFormData(barcode : string, data : any) : Observable<any> 
  {
        return this.http.patch<Ware>(`${environment.apiUrl}/${barcode}`, data).pipe(
          catchError((error : HttpErrorResponse) => {

            this.snackBar.open("Error updating ware - likely quantity to pack too high", "Close", {
              duration: 100000
            });
            
            const err = {
              message: "Error patching ware",
              status: error.status,
              statusText: error.statusText,
            };

            return throwError(() => err);
          })
        );
  }
}
