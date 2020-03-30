import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthOptions } from '../auth-options.model';
import { AuthMode } from '../auth-mode.enum';
import { NgForm } from '@angular/forms';
import { AuthUiService } from '../auth-ui.service';
import { LoginRequest } from './login-request.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { LoginResponse } from './login-response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../auth.component.scss',
    './login.component.scss'
  ]
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  @Input() authOptions: AuthOptions;

  constructor(
    private authUiService: AuthUiService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  togglePassword(eyeElem: HTMLElement, passwordElem: HTMLInputElement) {
    this.authUiService.togglePassword(eyeElem, passwordElem);
  }

  onSubmit(form: NgForm): void {
    const loginRequest: LoginRequest = {
      email: form.value.email,
      password: form.value.password,
    };

    this.subscription.add(this.authService.login(loginRequest).subscribe(
      (resp: LoginResponse) => console.log('Logged in', resp.username),
      (err: string) => console.log('got error >>>', err)
    ));
  }

  onSwitchToSignup(): void {
    this.authOptions.authMode = AuthMode.Register;
  }

}
