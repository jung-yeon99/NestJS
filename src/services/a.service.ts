import { Injectable } from '@nestjs/common';

@Injectable()
export class AService {
  getHello(): string {
    return 'Hello World A';
  }
}
