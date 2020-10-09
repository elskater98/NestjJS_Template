import { Controller, Get ,Request, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import {RolesGuard} from "./guards/roles.guard";
import {Roles} from "./decorators/roles.decorator";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(RolesGuard)
  @Roles('Administration')
  @UseGuards(AuthGuard('jwt'))
  @Get('/profile')
  async getProfile(@Request()req){
    return req.user;
  }

}
