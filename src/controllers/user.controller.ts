import { Controller,Post,Body,Get,Param, UseGuards } from '@nestjs/common';
import {UserService} from "../services/user.service";
import {UserDTO} from "../models/UserDTO";
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
    constructor(private userService:UserService) {
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async createUser(@Body() user:UserDTO){
        return await this.userService.create(user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll(){
        return await this.userService.getAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    async get(@Param('id') id){
        return await this.userService.get(id);
    }
}
