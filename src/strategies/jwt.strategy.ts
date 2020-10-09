import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {UserService} from "../services/user.service";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly configService: ConfigService,
                private readonly usersService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('jwt_key'),
        });
    }

    async validate(payload: any) {
        return await this.usersService.get(payload.sub);
    }
}
