import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { url_backend } from '../../config/config';
import { catchError, switchAll } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor( public _http: HttpClient ) { }

  login( data: any ): Observable<any> {
    return this._http.post(`${url_backend}/login`, data ).pipe(
    catchError( ( err: any ) => {
      Swal.fire({
        title: 'Error de autenticación',
        text: err.error.message,
        type: 'error',
        confirmButtonText: 'Ok'
      });
      return throwError( err );
    }));
  }
}
