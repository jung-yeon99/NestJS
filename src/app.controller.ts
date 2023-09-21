// import {
//   Body,
//   Controller,
//   Get,
//   Post,
//   Query,
//   Redirect,
//   Req,
// } from '@nestjs/common';
// import { BService } from './services/b.service';
// import { Request } from 'express';
// import { AppService } from './app.service';
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { CreateUserDto } from './users/dto/create-user.dto';

// @Controller()
// export class AppController {
//   tmpQuery: { nickname: string };
//   userService: any;
//   constructor(
//     private readonly appService: AppService,
//     private readonly serviceB: BService,
//   ) {}

//   @Get('/Bservice')
//   getHelloC(): string {
//     return this.serviceB.getHello();
//   }

//   @Get('/hello')
//   showHello(): string {
//     return 'hello';
//   }
//   @Post()
//   create(@Body() CreateUserDto: CreateUserDto) {
//     console.log(CreateUserDto);
//     return this.userService.create(CreateUserDto);
//   }
//   @Get('/sayHello')
//   sayHello(@Query('nickname') nickname: string): string {
//     // return this.appService.sayHello(nickname || this.tmpQuery.nickname);
//     return this.appService.sayHello(nickname);
//   }
//   @Get('/sayHelloR')
//   sayHelloR(@Req() req: Request): string {
//     return this.appService.sayHello(JSON.stringify(req.query));
//   }
//   @Redirect('/sayHello')
//   @Get('redirect-hello')
//   redirectHello(@Req() req: Request) {
//     const { nickname } = req.query;
//     this.tmpQuery = { nickname: nickname as string };
//     console.log('redirectHello>>>', nickname, req.query);
//     return {
//       url:
//         '/sayHelloR?' +
//         Object.entries(req.query)
//           .map(([k, v]) => `${k}=${v}`)
//           .join('&'),
//     };
//   }
// @Get()
// getHello(): string {
//   return this.appService.getHello();
// }
// @Post()
// setHello() {
//   this.greet = 'xxx';
//   return `Hello ${this.greet}`;
// }
// @Get()
// getHello(@Req() req: Request): string {
//   console.log(req);
//   return this.appService.getHello();
// }
// @HttpCode(202)
// @Patch(':id')
// update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//   return this.userService.update(+id, updateUserDto);
// }
// }

import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { BService } from './services';
import { Request } from 'express';

@Controller()
export class AppController {
  greet: string;
  // tmpQuery: { nickname: string };
  tmpQuery: { nickname: string };
  constructor(
    private readonly appService: AppService,
    private readonly serviceB: BService,
  ) {}

  @Get('serviceB')
  getHelloC() {
    return this.serviceB.hello();
  }

  @Get('/sayHello')
  sayHello(@Query('nickname') nickname: string): string {
    return this.appService.sayHello(nickname);
  }

  @Get('/sayHelloR')
  sayHelloR(@Req() req: Request): string {
    return this.appService.sayHello(JSON.stringify(req.query));
  }

  @Redirect()
  @Get('redirect-hello')
  redirectHello(@Req() req: Request) {
    console.log('redirectHello.req>>', req.query);
    // const { nickname } = req.query;
    // this.tmpQuery = { nickname: nickname as string };
    return {
      // [ [nickname: 홍], [age: 23], []]
      url:
        '/sayHelloR?' +
        Object.entries(req.query)
          .map(([k, v]) => `${k}=${v}`)
          .join('&'),
    };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @HttpCode(HttpStatus.OK)
  @Post()
  setHello(): string {
    this.greet = 'XXXX';
    return `Hello ${this.greet}`;
  }
}

// x = new AppController(new AppService());
// map.set('/api', x);
// exp.set('/api/hello', getHello);
// r = exp.get('/api/)call({})
// res.send(r)
