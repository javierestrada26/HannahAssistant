import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { MyLogger } from './hannah-assistant/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,);

  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    })
   );

  app.enableCors();
  
  await app.listen(process.env.PORT || 3000);
  Logger.log('Application is running on: http://localhost:3000');
}
bootstrap();
