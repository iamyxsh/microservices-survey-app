import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthenticationError } from 'apollo-server-express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class QuestionGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) throw new AuthenticationError('Provide valid token.');
    const secret: any = jwt.verify(token, 'mySuperSecret');
    if (!secret) throw new AuthenticationError('Provide valid token.');

    req.userid = secret.userid;
    return true;
  }
}
