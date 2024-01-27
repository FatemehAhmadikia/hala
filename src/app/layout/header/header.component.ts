import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
    userProfile!: HALA.UserProfile;
    hasNewNotification: boolean = true;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.getUserProfile().subscribe((res) => {
            this.userProfile = res;
            console.log(this.userProfile);
        });
    }
}
