import { Component } from '@angular/core';
import { AuthMode } from './auth-mode.enum';
import { AuthOptions } from './auth-options.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  AuthModeEnum = AuthMode;
  authOptions = new AuthOptions();

  constructor() {
    this.authOptions.authMode = AuthMode.Login;
  }
}
