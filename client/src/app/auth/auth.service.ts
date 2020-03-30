import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from './auth-response.model';
import { AppUrls } from '../utils/AppUrls';
import { RegisterRequest } from './register/register-request.model';
import { LoginRequest } from './login/login-request.model';
import { RegisterResponse } from './register/register-response.model';
import { LoginResponse } from './login/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    return this.http
      .post<RegisterResponse>(
        `${AppUrls.Auth}/register`,
        registerRequest
      );
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(
        `${AppUrls.Auth}/login`,
        loginRequest
      );
  }
}
