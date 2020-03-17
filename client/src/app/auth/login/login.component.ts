import { Component, OnInit, Input } from '@angular/core';
import { AuthOptions } from '../auth-options.model';
import { AuthMode } from '../auth-mode.enum';
import { NgForm } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    // this.authOptions.authMode = AuthMode.Login;
  }

  onSwitchToSignup(): void {
    this.authOptions.authMode = AuthMode.Register;
  }

}
