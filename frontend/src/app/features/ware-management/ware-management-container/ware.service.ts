import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Ware } from '../../../core/models/ware.model';
import { EMPTY, Observable } from 'rxjs';
import { NotificationService } from '../../../core/services/notification.service';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WareService {

  private http = inject(HttpClient);
  private notificatonService = inject(NotificationService);


  getAll() : Observable<Ware[]>
  {
    return this.http.get<Ware[]>(`${environment.apiUrl}`).pipe(catchError(error => {
      this.notificatonService.showError("Error: failed getting all wares");
      console.error(error);
      return EMPTY;
    }));
  }

  getByBarcode(barcode: string) : Observable<Ware>
  {
    return this.http.get<Ware>(`${environment.apiUrl}/${barcode}`);
  }

  post(data : any) : Observable<object>
  {
    return this.http.post(`${environment.apiUrl}`, data).pipe(catchError(error => {
      this.notificatonService.showError("Error: failed creating new ware");
      console.error(error);
      return EMPTY;
    }));
  }

  patch(barcode: string, quantityDelta : any) : Observable<object>
  {
    const data = { quantityDelta };
    return this.http.patch(`${environment.apiUrl}/${barcode}`, data).pipe(catchError(error => {
      if (error.status === 422)
        this.notificatonService.showError("Error: likely quantity too low to process packing order");
      else
        this.notificatonService.showError("Error: failed updating ware");
      return EMPTY;
    }));
  }


  delete(barcode: string) : Observable<object>
  {
    return this.http.delete(`${environment.apiUrl}/${barcode}`).pipe(catchError(error => {
      this.notificatonService.showError("Error: failed deleting ware");
      console.error(error);
      return EMPTY;
    }));
  }

}
