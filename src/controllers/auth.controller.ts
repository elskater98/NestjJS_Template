import { Controller,Post,UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {AuthService} from "../services/auth.service";
import {ReqUser} from "../decorators/user.decorator";
import {User} from "../schemas/UserSchema";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService) {
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@ReqUser() user:User){
        return this.authService.login(user);
    }
}
