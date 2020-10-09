import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {AuthService} from "../services/auth.service";
import {AuthController} from "../controllers/auth.controller";
import {UserModule} from "./user.module";
import {LocalStrategy} from "../strategies/local.strategy";
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import {JwtStrategy} from "../strategies/jwt.strategy";


@Module({imports:[UserModule,PassportModule,JwtModule.registerAsync({
                imports:[ConfigModule],
                inject:[ConfigService],
                useFactory:async (configService:ConfigService)=>({
                        secret:configService.get<string>('jwt_key'),
                        signOptions:{
                                expiresIn:'72h'
                        }
                })
        })],
        controllers:[AuthController],
        providers:[AuthService,LocalStrategy,JwtStrategy],
        exports:[]})
export class AuthModule {}
