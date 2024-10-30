import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Client-side error: ${error.error.message}`;
      } else {
        errorMessage = `Server-side error: ${error.status} ${error.message}`;
      }

      alert(errorMessage);
      console.error(errorMessage);

      return throwError(() => new Error(errorMessage));
    })
  );
};
