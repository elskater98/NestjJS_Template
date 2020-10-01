import { Injectable } from '@nestjs/common';
import {UserService} from "./services/user.service";
import {UserDTO} from "./models/UserDTO";

@Injectable()
export class AppService {
    constructor(private readonly userService: UserService) {
    }

    async init(){
        if(!await this.userService.exists("admin")){
            const dto = new UserDTO({username:"admin",email:"admin@admin.com",roles:['admin'],full_name:'Admin Admin',mobile_phone:"666999333",password:"password"})
            await this.userService.create(dto);
        }
        console.log("Init Database");

    }
}
