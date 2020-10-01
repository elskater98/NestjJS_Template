import { Injectable } from '@nestjs/common';
import {UserService} from "./services/user.service";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
    constructor(private readonly userService: UserService,
                private readonly configService: ConfigService) {
    }

    async init(){

    }
}
