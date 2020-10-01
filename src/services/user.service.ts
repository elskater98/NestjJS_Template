import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from "../schemas/UserSchema";
import {UserDTO} from "../models/UserDTO";
@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel:Model<User>) {
    }

    async create(userDTO:UserDTO):Promise<User>{
        const createdUser = new this.userModel(userDTO);
        return createdUser.save();
    }

    async exists(id):Promise<boolean>{
        return this.userModel.exists({username: id});
    }
}
