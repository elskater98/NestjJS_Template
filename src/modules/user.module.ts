import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema,User} from "../schemas/UserSchema";
import {UserController} from "../controllers/user.controller";
import {UserService} from "../services/user.service";
import {UserDTO} from "../models/UserDTO";

@Module({imports:[MongooseModule.forFeature([{name: 'User', schema:UserSchema}])],
    controllers:[UserController],
    providers:[UserService,UserDTO]})
export class UserModule {

}
