import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _clientInfoKey: string = 'clientInfo';

    get getToken(): string {
        return localStorage.getItem(this._clientInfoKey) ?? '';
    }
    set setToken(token: string) {
        if (token) {
            localStorage.setItem(this._clientInfoKey, token);
        }
    }

    getUserProfile(): Observable<HALA.UserProfile> {
        return of({
            email: 'esamalnahdi@gmail.com',
            role: 'Hala Payments Company',
            fullName: 'Esam Alnahdi',
            companyName: 'HALA',
            level: 'Starter',
        });
    }
}
