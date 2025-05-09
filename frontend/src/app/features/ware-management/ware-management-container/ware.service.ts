import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Ware } from '../../../core/models/ware.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WareService {

  private http = inject(HttpClient);


  
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
  }

  patch(barcode: string, quantityDelta : any) : Observable<object>
  {
    const data = { quantityDelta };
    return this.http.patch(`${environment.apiUrl}/${barcode}`, data);
    // TODO ????? add error handling, perhaps using snackbars like above

    // TODO ALSO should the notfiication esrvice triggered from here or the component?? nok compnoent
  }


  delete(barcode: string) : Observable<object>
  {
    return this.http.delete(`${environment.apiUrl}/${barcode}`);
  }

}
