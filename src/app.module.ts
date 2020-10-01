import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {UserModule} from "./modules/user.module";
import {ConfigModule,ConfigService} from "@nestjs/config";
import config from "../config";


@Module({

  imports: [UserModule,ConfigModule.forRoot({
    isGlobal: true,
    load:[config]
  }),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:async (configService:ConfigService)=>({
        uri:configService.get<string>('MONGO_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      })
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
