import { isPlatformServer } from '@angular/common';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    private allowedUrls: string[] = [];

    constructor(@Inject(PLATFORM_ID) private platformId: any) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (isPlatformServer(this.platformId) && !this.allowedUrls.includes(request.url)) {
            return EMPTY;
        }

        const requestConfig = request.clone({
            headers: request.headers.set('ngsw-bypass', 'true'),
        });

        return next.handle(requestConfig).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    return event.clone({
                        body:
                            (event.body && event.body?.data) ||
                            event.body?.data == null ||
                            event.body?.data == false ||
                            event.body?.data == 0
                                ? event.body?.data
                                : event.body,
                    });
                }
                return event;
            })
        );
    }
}
