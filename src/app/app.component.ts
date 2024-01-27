import { Component, OnInit } from '@angular/core';
import { LoginService } from './pages/login/service/login.service';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private loginService: LoginService, private authService: AuthService) {}

    ngOnInit(): void {
        this.login();
    }

    login() {
        this.loginService.login().subscribe((res) => {
            if (res) {
                this.loginService.setUserInfoInStorage(res);
                this.authService.isAuthenticated.next(true);
            }
        });
    }
}
