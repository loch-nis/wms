import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateWareService {


  constructor(private http: HttpClient) {}

  postFormData(data : any) : Observable<any> {
    return this.http.post(`${environment.apiUrl}`,data).pipe(
      catchError((error : HttpErrorResponse) => {
        const err = {
          message: "Error posting ware",
          status: error.status,
          statusText: error.statusText,
        };
        return throwError(() => err);
      })
    );
  }
}
