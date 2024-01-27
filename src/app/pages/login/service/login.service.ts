import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class LoginService {
    private clientInfoKey: string = 'clientInfo';

    constructor() {}

    login(): Observable<Login.UserInterface> {
        return of<Login.UserInterface>({
            email: 'esamalnahdi@gmail.com',
            password: 'sdfdfsdf',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        });
    }

    singUp() {
        return;
    }

    setUserInfoInStorage(body: Login.UserInterface): void {
        localStorage.setItem(this.clientInfoKey, JSON.stringify(body));
    }
}
