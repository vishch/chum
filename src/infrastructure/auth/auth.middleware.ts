import passport from 'passport';

export class AuthMiddleware {
  init(): any {
    return passport.authenticate('jwt', { session: false });
  }
}
