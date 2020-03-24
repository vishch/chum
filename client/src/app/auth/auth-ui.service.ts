import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { AuthServiceModule } from './auth-service.module';

@Injectable({
  providedIn: AuthServiceModule
})
export class AuthUiService {
  private renderer: Renderer2;

  constructor(
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
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
}
