// boolean
let boolType1: boolean = true;
let boolType2: boolean = false;

// num
let numType1: number = 5;
let numType2: number = 0.7;

// str
let firstName: string = "alice";
let longString: string = `Kimalice is a developer. He is 20 years old.`;

// array
let arrType1: string[] = ["apple", "banana", "grape"];
let arrType2: Array<number> = [4, 7, 100];

let tupleType: [string, number, boolean] = ["Alice", 20, true];

// obj
let objType: { name: string; age: number } = {
  name: "alice",
  age: 20,
};

// function
function func(x: number, y: number): number {
  return x + y;
}

let arrowFunc = (x: number, y: number): number => {
  return x + y;
};

// union types
function unionType(value: number | string): void {
  if (typeof value === "number") {
    console.log(`The value is a number: ${value}`);
  } else {
    console.log(`The value is a string: ${value}`);
  }
}

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}
function unionType2(someone: Developer | Person) {
  console.log(someone.name);
}

// intersection type
type User = Developer & Person;

function unionType3(someone: Developer & Person) {
  console.log(someone.age);
  console.log(someone.name);
  console.log(someone.skill);
}

// extends
interface Developer2 extends Person {
  language: string;
}

const person: Developer2 = {
  language: "TypeScript",
  age: 20,
  name: "Anna",
};
