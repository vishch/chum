import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiUrls } from '../utils/urls/api-urls';
import { RegisterRequest } from './register/register-request.model';
import { LoginRequest } from './login/login-request.model';
import { RegisterResponse } from './register/register-response.model';
import { LoginResponse } from './login/login-response.model';
import { WebStorageService } from '../utils';
import { StorageKeys } from '../utils/web-storage/storage-keys';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _redirectUrl: string;

  constructor(
    private http: HttpClient,
    private storageService: WebStorageService,
  ) { }

  get username(): string {
    return this.storageService.getItem(StorageKeys.username());
  }

  get isLoggedIn(): boolean {
    return !!this.username;
  }

  set redirectUrl(url: string) {
    this._redirectUrl = url;
  }

  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    return this.http
      .post<RegisterResponse>(
      `${ApiUrls.Auth}/register`,
      registerRequest,
    );
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(
      `${ApiUrls.Auth}/login`,
      loginRequest,
    ).pipe(
      tap((response) => {
        this.storageService.setItem(StorageKeys.username(), response.username);
      }),
    );
  }
}
