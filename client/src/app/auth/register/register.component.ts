import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AuthOptions } from '../auth-options.model';
import { AuthMode } from '../auth-mode.enum';
import { NgForm } from '@angular/forms';
import { AuthUiService } from '../auth-ui.service';
import { AuthService } from '../auth.service';
import { Register } from './register.model';
import { Subscription } from 'rxjs';
import { AuthResponse } from '../auth-response.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    '../auth.component.scss',
    './register.component.scss'
  ]
})
export class RegisterComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  @Input() authOptions: AuthOptions;

  constructor(
    private authUiService: AuthUiService,
    private authService: AuthService,
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
    const register: Register = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
    };

    this.subscription.add(this.authService.signup(register).subscribe(
      (resp: AuthResponse) => console.log('Signed up', resp.username),
      (err: string) => console.log('got error >>>', err)
    ));
  }

  onSwitchToLogin(): void {
    this.authOptions.authMode = AuthMode.Login;
  }
}
