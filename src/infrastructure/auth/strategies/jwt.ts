import { Strategy, VerifiedCallback } from 'passport-jwt';
import type { Request } from 'express';
import { JwtConfig } from 'utils/config';
import type { JwtPayload } from './jwt-payload';

export class JwtStrategy {
  getStrategy(): Strategy {
    return new Strategy({
      jwtFromRequest: (req: Request) => req.cookies.jwt,
      secretOrKey: JwtConfig.SECRET,
    },
    (jwtPayload: JwtPayload, done: VerifiedCallback) => {
      if (Date.now() > jwtPayload.expires) {
        return done('jwt expired');
      }

      return done(null, jwtPayload);
    });
  }
}
