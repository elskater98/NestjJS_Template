import { Injectable } from '@nestjs/common';
import {UserService} from "./user.service";
import bcrypt = require("bcrypt");
import { JwtService } from '@nestjs/jwt';
import {User} from "../schemas/UserSchema";

@Injectable()
export class AuthService {
    constructor(private userService:UserService,
                private jwtService: JwtService) {
    }

    async validateUser(username:string,password:string):Promise<any>{
        const user = await this.userService.get(username);
        if(user && bcrypt.compare(password,user.password)){
            return user;
        }
        return null;
    }

    async login(user:User){
        const  payload = { email: user.email, sub: user.username };
        return {access_token:this.jwtService.sign(payload)}
    }
}
