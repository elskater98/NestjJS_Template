import { Controller,Post,Patch,Body,Get,Param, UseGuards, Delete } from '@nestjs/common';
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

    @UseGuards(RolesGuard)
    @Roles('Administration')
    @UseGuards(AuthGuard('jwt'))
    @Patch('/:id')
    async update(@Param('id')id,@Body() changes){
        await this.userService.edit(id,changes);
    }

    @UseGuards(RolesGuard)
    @Roles('Administration')
    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    async remove(@Param('id')id){
        await this.userService.remove(id);
    }

}
