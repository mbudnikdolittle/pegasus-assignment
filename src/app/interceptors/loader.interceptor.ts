import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../components/shared/preloader/loader.service';
import { finalize } from 'rxjs';

export const loaderInterceptor = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const loaderService = inject(LoaderService);
  loaderService.show();
  return next(request).pipe(finalize(() => loaderService.hide()));
};
