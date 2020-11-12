import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from "../schemas/UserSchema";
import {UserDTO} from "../models/UserDTO";
import bcrypt = require("bcrypt");

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel:Model<User>) {
    }

    async create(userDTO:UserDTO):Promise<User>{
        userDTO.password = await bcrypt.hash(userDTO.password,10);
        const createdUser = new this.userModel(userDTO);
        return createdUser.save();
    }

    async getAll():Promise<User[]>{
        return this.userModel.find({},{password:0,__v:0});
    }

    async get(id:string):Promise<User>{
        return this.userModel.findOne({username:id})
    }

    async exists(id:string):Promise<boolean>{
        return this.userModel.exists({username: id});
    }

    async edit(id:string,changes:any){
        await this.userModel.updateOne({'_id':id},{
            $set:changes
        });
    }

    async remove(id:string){
        await this.userModel.deleteOne({_id:id});
    }
}
