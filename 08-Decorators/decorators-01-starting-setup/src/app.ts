function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "max";

  constructor() {
    console.log("creating person object...");
  }
}

const pers = new Person();
console.log(pers);
