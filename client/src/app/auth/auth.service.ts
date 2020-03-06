import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from './auth-response.model';
import { AppUrls } from '../utils/AppUrls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  signup(username: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(
        `${AppUrls.Auth}/signup`,
        {
          username,
          password
        }
      );
  }
}
