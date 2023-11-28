import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  authenticated = false;
  showFiller = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated.subscribe((isAuthenticated) => {
      this.authenticated = isAuthenticated;
    });
  }

  logout() {
    this.authService.logout();
  }
}
