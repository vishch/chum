import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { AuthOptions } from '../auth-options.model';
import { AuthMode } from '../auth-mode.enum';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    '../auth.component.scss',
    './register.component.scss'
  ]
})
export class RegisterComponent implements OnInit {
  @Input() authOptions: AuthOptions;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  togglePassword(eyeElem: HTMLElement, passwordElem: HTMLInputElement) {
    if (eyeElem.classList.contains('fa-eye')) {
      this.renderer.setAttribute(passwordElem, 'type', 'password');
      this.renderer.removeClass(eyeElem, 'fa-eye');
      this.renderer.addClass(eyeElem, 'fa-eye-slash');
    } else {
      this.renderer.setAttribute(passwordElem, 'type', 'text');
      this.renderer.removeClass(eyeElem, 'fa-eye-slash');
      this.renderer.addClass(eyeElem, 'fa-eye');
    }
  }

  onSubmit(form: NgForm): void {
    // this.authOptions.authMode = AuthMode.Login;
  }

  onSwitchToLogin(): void {
    this.authOptions.authMode = AuthMode.Login;
  }
}
