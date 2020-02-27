import passport from 'passport';
import type { Express } from 'express';
import { LocalStrategy } from './strategies/local';
import { JwtStrategy } from './strategies/jwt';

class AuthPassport {
  readonly #localStrategy: LocalStrategy;
  readonly #jwtStrategy: JwtStrategy;

  constructor(private readonly app: Express) {
    this.#localStrategy = new LocalStrategy();
    this.#jwtStrategy = new JwtStrategy();
  }

  init() {
    passport.use(this.#localStrategy.getStrategy());
    passport.use(this.#jwtStrategy.getStrategy());

    this.app.use(passport.initialize());
  }
}

export {
  AuthPassport as Auth,
};
