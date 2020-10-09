import { Injectable, Logger } from '@nestjs/common';
import {UserService} from "./services/user.service";
import {UserDTO} from "./models/UserDTO";
import{ConfigService} from '@nestjs/config'

@Injectable()
export class AppService {
    private readonly logger = new Logger(AppService.name);
    constructor(private readonly userService: UserService,
                private readonly configService:ConfigService) {
    }

    async init(){
        if(!await this.userService.exists("admin")){
            const user = this.configService.get<object>('default_user');
            const dto = new UserDTO(user);
            await this.userService.create(dto);
            this.logger.log("Initialize Administration User");
        }
    }
}
