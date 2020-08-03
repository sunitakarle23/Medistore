import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponseInterceptors implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;
    return next.handle(req).pipe(
      retry(3),
      map(res => {
        debugger;
        console.log(res);
        return res;
      }),
      catchError((error: HttpErrorResponse) => {
        let errMsg = "";
        console.log(error);
        //client-side error
        if (error.error instanceof ErrorEvent) {
          errMsg = `Error Message : ${error.message}`;
        } else { // server-side
          errMsg = `Error Code : ${error.status} , Message : ${error.message}`;
        }
        return throwError(errMsg);
      })
    )
  }
}
