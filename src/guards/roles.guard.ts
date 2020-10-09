import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {User} from "../schemas/UserSchema";
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {
  }
  canActivate(context: ExecutionContext,): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if(!roles){
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user:User = request.user;
    if (!user || !user.roles || user.roles.length == 0) {
      return false;
    }
    return this.matchRoles(roles, user.roles);
  }
  private matchRoles(requiredRoles: string[], userRoles: any): boolean {
    const satisfiedRoles = requiredRoles.filter(role => userRoles.includes(role));
    return satisfiedRoles.length > 0;
  }

}
