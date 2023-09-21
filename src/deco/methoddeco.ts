function HandleError() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function () {
      try {
        // eslint-disable-next-line prefer-rest-params
        originalMethod.apply(this, arguments);
      } catch (e) {
        console.log(e);
      }
    };
  } as MethodDecorator;
}

class Greeter {
  @HandleError()
  hello() {
    throw new Error('테스트 에러');
  }
}

const t = new Greeter();
t.hello();
