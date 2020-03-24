import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { AuthOptions } from '../auth-options.model';
import { AuthMode } from '../auth-mode.enum';
import { NgForm } from '@angular/forms';
import { AuthUiService } from '../auth-ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../auth.component.scss',
    './login.component.scss'
  ]
})
export class LoginComponent implements OnInit {
  @Input() authOptions: AuthOptions;

  constructor(
    private authUiService: AuthUiService,
  ) { }

  ngOnInit(): void {
  }

  togglePassword(eyeElem: HTMLElement, passwordElem: HTMLInputElement) {
    this.authUiService.togglePassword(eyeElem, passwordElem);
  }

  onSubmit(form: NgForm): void {
    // this.authOptions.authMode = AuthMode.Login;
  }

  onSwitchToSignup(): void {
    this.authOptions.authMode = AuthMode.Register;
  }

}
