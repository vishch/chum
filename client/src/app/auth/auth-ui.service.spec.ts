import { TestBed } from '@angular/core/testing';

import { AuthUiService } from './auth-ui.service';

describe('AuthUiService', () => {
  let service: AuthUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
