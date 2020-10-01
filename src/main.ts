import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common';
import{ConfigService} from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* Auto-validation*/
  app.useGlobalPipes(new ValidationPipe())

  /*Config*/
  const config = app.get(ConfigService);

  /* Init Database*/



  await app.listen(config.get('port'));

  // TODO JWT (Guard, Decorators)
}
bootstrap();
