// function Enumerable(enumerable: boolean) {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDecorator,
//   ) {
//     descriptor.enumerable = enumerable;
//   };
// }
// class Person {
//   constructor(private name: string) {}

//   @Enumerable(true)
//   get getName() {
//     return this.name;
//   }
//   @Enumerable(false)
//   set setName(name: string) {
//     this.name = name;
//   }
// }

// const person = new Person('Dextor');
// for (let key in person) {
//   console.log('${key}: ${person[key]}');
// }
