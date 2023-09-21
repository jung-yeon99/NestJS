import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sayHello(nickname: string): string {
    return `Hello, ${nickname}!`;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
