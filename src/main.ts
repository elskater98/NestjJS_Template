import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common';
import {UtilService} from "./services/util.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* Auto-validation*/
  app.useGlobalPipes(new ValidationPipe())

  /* Init Database*/
  const utilServices = app.get(UtilService);
  await utilServices.initializationDataBase();

  await app.listen(3000);
}
bootstrap();
