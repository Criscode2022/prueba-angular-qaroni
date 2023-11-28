import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['/news']);
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        (data) => {
          console.log('Inicio de sesión exitoso');
          this.router.navigate(['/news']);
        },
        (error) => {
          this.error = 'Error en el inicio de sesión';
          console.error('Error en el inicio de sesión', error);
        }
      );
    } else {
      if (this.loginForm.get('username')?.errors) {
        this.error = 'Error en el campo usuario';
      } else if (this.loginForm.get('password')?.errors) {
        this.error = 'Error en el campo contraseña';
      }
    }
  }
}
