// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { BaseService } from './services/base-service';
// import { AService, BService } from './services';
// import { ApiController } from './api/api.controller';
// import { ConfigModule } from '@nestjs/config';
// // import { UsersController } from './users/users.controller';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       envFilePath: '.env',
//     }),
//     // UsersModule,
//   ],
//   // envFilePath: ['.local.env', '.dev.env', '.env', 'base.env' ],
//   controllers: [AppController, ApiController],
//   providers: [AppService, AService, BService, BaseService],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AService, BService } from './services';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import emailConfig from './config/email.config';
import baseConfig from './config/base.config';
import { DbModule } from './db/db.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: process.env.NODE_ENV === 'product' ? '.env' : '.local.env',
      envFilePath: ['.local.env', '.env.development', '.env'],
      expandVariables: true,
      load: [emailConfig, baseConfig],

      // cache: true,
    }),
    UsersModule,
    DbModule,
  ],
  controllers: [AppController],
  providers: [AppService, AService, BService],
})
export class AppModule {}
