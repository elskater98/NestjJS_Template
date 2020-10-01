import { Controller,Post,Body } from '@nestjs/common';
import {UserService} from "../services/user.service";
import {UserDTO} from "../models/User";



@Controller('user')
export class UserController {
    constructor(private userService:UserService) {
    }

    @Post()
    async createUser(@Body()user:UserDTO){
        return await this.userService.create(user);
    }
}
