import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, BehaviorSubject, Observable } from 'rxjs';
import { AuthResponse } from 'src/main';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl =
    'https://rest.apistaging.plaam.com/v1/merchants/80/users/logins';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.checkToken()
  );

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(this.loginUrl, { username, password })
      .pipe(
        tap((response) => {
          if (response.result && response.result.length > 0) {
            localStorage.setItem('token', response.result[0].access_token);
            this.isAuthenticatedSubject.next(true);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.isAuthenticatedSubject.next(false);
  }

  private checkToken(): boolean {
    return localStorage.getItem('token') !== null;
  }

  get isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}
