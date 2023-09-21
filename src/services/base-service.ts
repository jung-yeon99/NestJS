import { Inject, Injectable } from '@nestjs/common';
import { AService } from './a.service';

@Injectable()
export class BaseService {
  @Inject(AService) private readonly serviceA: AService;
  //constructor(private readonly serviceA: AService) {}
  // @inject()
  doSomething() {
    return this.serviceA.getHello();
  }
}
