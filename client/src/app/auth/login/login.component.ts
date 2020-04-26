import {
  Component, OnInit, Input, OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AppUrls } from 'src/app/utils/urls/app-urls';
import { WebStorageService } from 'src/app/utils';
import { StorageKeys } from 'src/app/utils/web-storage/storage-keys';
import { AuthOptions } from '../auth-options.model';
import { AuthMode } from '../auth-mode.enum';
import { AuthUiService } from '../auth-ui.service';
import { LoginRequest } from './login-request.model';
import { AuthService } from '../auth.service';
import { LoginResponse } from './login-response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../auth.component.scss',
    './login.component.scss',
  ],
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  @Input() authOptions: AuthOptions;

  constructor(
    private authUiService: AuthUiService,
    private authService: AuthService,
    private router: Router,
    private storageService: WebStorageService,
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
      (resp: LoginResponse) => {
        const { username } = resp;
        console.log('Logged in', username);
        this.router.navigateByUrl(AppUrls.Home);
      },
      (err: string) => console.log('got error >>>', err),
    ));
  }

  onSwitchToSignup(): void {
    this.authOptions.authMode = AuthMode.Register;
  }

}
