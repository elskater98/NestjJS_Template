import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe } from '@nestjs/common';
import{ConfigService} from '@nestjs/config'
import {AppService} from "./app.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule,
      {logger: ['error', 'warn','debug','log','verbose']});

  /* Auto-validation*/
  app.useGlobalPipes(new ValidationPipe())

  /*Config*/
  const config = app.get(ConfigService);

  /* Init Database*/
  const appService = app.get(AppService);
  await appService.init();


  await app.listen(config.get<number>('port'));


  // TODO JWT (Guard, Decorators)
}
bootstrap();
