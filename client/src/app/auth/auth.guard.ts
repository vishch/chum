import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AppUrls } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    this.authService.redirectUrl = url;

    this.router.navigateByUrl(AppUrls.Auth);

    return false;
  }
}
