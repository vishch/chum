import { Strategy, VerifiedCallback } from 'passport-jwt';
import type { Request } from 'express';
import { JwtConfig } from 'utils/config';
import { Logger } from 'infrastructure';
import { Time } from 'utils';
import type { JwtPayload } from './jwt-payload';

export class JwtStrategy {
  readonly #logger: Logger;

  constructor() {
    this.#logger = new Logger('Jwt Strategy');
  }

  getStrategy(): Strategy {
    return new Strategy({
      jwtFromRequest: (req: Request) => req.cookies.jwt,
      secretOrKey: JwtConfig.SECRET,
    },
    (jwtPayload: JwtPayload, done: VerifiedCallback) => {
      this.#logger.info('Verifying token');

      if (Time.NowInSec() > jwtPayload.expires) {
        const msg = 'jwt expired';
        this.#logger.info(msg);
        return done(msg);
      }

      return done(null, jwtPayload);
    });
  }
}
