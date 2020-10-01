import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UtilService} from "./services/util.service";
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports: [MongooseModule.forRoot('mongodb://admin:password@localhost:27017/db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })],
  controllers: [AppController],
  providers: [AppService,UtilService],
})
export class AppModule {}
