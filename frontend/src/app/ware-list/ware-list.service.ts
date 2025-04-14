import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Ware } from '../interfaces/ware';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WareListService {
  
  constructor(private http: HttpClient) { }

  getAllWares() : Observable<Ware[]>
  {
    return this.http.get<Ware[]>(environment.apiUrl).pipe(
      catchError(error => {
        console.error('Error getting all wares: ', error);
        return throwError(() => new Error('Error getting all wares'));
      })
    );
  }

}
