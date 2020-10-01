import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from "../schemas/UserSchema";
import {UserDTO} from "../models/User";
@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel:Model<User>) {
    }

    async create(userDTO:UserDTO):Promise<User>{
        const createdUser = new this.userModel(userDTO);
        return createdUser.save();
    }
}
