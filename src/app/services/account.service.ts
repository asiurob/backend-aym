import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url_backend } from '../config/config';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor( public _http: HttpClient ) { }



  accountData(): Observable<any> {
    const token = localStorage.getItem('token');
    return this._http.post( `${url_backend}/account`, { token } ).pipe(
      catchError( ( err: any ) => {
        Swal.fire({
          title: 'No fue posible recuperar la información',
          text: err.error.message,
          type: 'error',
          confirmButtonText: 'Ok'
        });
        return throwError( err );
      }));
  }
}
