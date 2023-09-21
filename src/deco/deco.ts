// function first() {
//   console.log('first() : factory evaluated');
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log('first() : called');
//   } as MethodDecorator;
// }

// function second() {
//   console.log('second() : factory evaluated');
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log('second() : called');
//   } as MethodDecorator;
// }

// class ExampleClass {
//   @first()
//   @second()
//   method(): void {
//     console.log('method is called');
//   }
// }

// const example = new ExampleClass();
// example.method();
