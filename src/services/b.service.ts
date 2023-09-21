import { Injectable } from '@nestjs/common';
import { BaseService } from './base-service';

@Injectable()
export class BService extends BaseService {
  hello() {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return this.doSomething();
  }
}
