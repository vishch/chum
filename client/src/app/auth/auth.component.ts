import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthResponse } from './auth-response.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private subscription = new Subscription();
  
  isLoginMode = true;
  isLoading = false;
  errorResponse: string = null;
  
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const username = form.value.username;
    const password = form.value.password;

    let authObs: Observable<AuthResponse>;

    this.isLoading = true;

    if (this.isLoginMode) {
      //authObs = this.authService.login(username, password);
    } else {
      authObs = this.authService.signup(username, password);
    }

    this.subscription.add(
      authObs.subscribe(
      resData => {
        console.log(resData);
        this.router.navigate(['/home']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.errorResponse = errorMessage;
        // this.showErrorAlert(errorMessage);
      },
      () => this.isLoading = false
    ));

    form.reset();
  }

}
