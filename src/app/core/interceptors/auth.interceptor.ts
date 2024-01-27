import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    token: string = '';
    constructor(private authService: AuthService) {
        this.token = this.authService.getToken;
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (this.token) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${this.token}` },
            });
            return next.handle(request);
        } else {
            return next.handle(request).pipe(
                catchError((error: HttpEvent<any>) => {
                    return throwError(error);
                })
            );
        }
    }
}
