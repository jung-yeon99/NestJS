// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

//nest:start 구동시 main.ts가 처음 적용됨
//node main.ts

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3003);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
