import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from './auth-response.model';
import { AppUrls } from '../utils/AppUrls';
import { Register } from './register/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  signup(register: Register): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(
        `${AppUrls.Auth}/signup`,
        register
      );
  }
}
