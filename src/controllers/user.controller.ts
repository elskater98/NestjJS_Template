import { Controller,Post,Body,Get,Param } from '@nestjs/common';
import {UserService} from "../services/user.service";
import {UserDTO} from "../models/UserDTO";

@Controller('user')
export class UserController {
    constructor(private userService:UserService) {
    }

    @Post()
    async createUser(@Body() user:UserDTO){
        return await this.userService.create(user);
    }

    @Get()
    async getAll(){
        return await this.userService.getAll();
    }

    @Get('/:id')
    async get(@Param('id') id){
        return await this.userService.get(id);
    }
}
