import { Controller,Post,Body,Get,Param, UseGuards } from '@nestjs/common';
import {UserService} from "../services/user.service";
import {UserDTO} from "../models/UserDTO";
import { AuthGuard } from '@nestjs/passport';
import {Roles} from "../decorators/roles.decorator";
import {RolesGuard} from "../guards/roles.guard";

@Controller('user')
export class UserController {
    constructor(private userService:UserService) {
    }

    @UseGuards(RolesGuard)
    @Roles('Administration')
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async createUser(@Body() user:UserDTO){
        return await this.userService.create(user);
    }

    @UseGuards(RolesGuard)
    @Roles('Administration')
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAll(){
        return await this.userService.getAll();
    }
    
    @UseGuards(RolesGuard)
    @Roles('Administration')
    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    async get(@Param('id') id){
        return await this.userService.get(id);
    }
}
