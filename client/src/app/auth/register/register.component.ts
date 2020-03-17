import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    // this.authOptions.authMode = AuthMode.Login;
  }

  onSwitchToLogin(): void {
    this.authOptions.authMode = AuthMode.Login;
  }
}
