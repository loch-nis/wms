import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';
import { Ware } from '../../../core/models/ware.model';
import { environment } from '../../../../environments/environment';

import { catchError, Observable, throwError } from 'rxjs';

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

  //TODO 
  //getAllWares = rxResource({})

}
