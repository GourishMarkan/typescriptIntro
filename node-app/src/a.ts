function greet(firstName: string) {
  console.log("Hello " + firstName);
}

greet("harkirat");

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(2, 3));

function isLegal1(age: number): boolean {
  return age > 18 ? true : false;
}
console.log(isLegal1(12));

function first() {
  console.log("first func");
}

function second(fn: () => void, time: number) {
  setTimeout(fn, time);
}
second(() => console.log("hi there"), 2000);

// interface
interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function isLegal(user: User): boolean {
  return user.age >= 18 ? true : false;
}
// 2. Implementing interfaces--
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}
// types--
// type User = {
//   firstName: string;
//   lastName: string;
//   age: number;
// };
// Unions--
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202
//  Intersection
type Employee1 = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee1 & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer",
};

// Arrays--
type NumberArr = number[];

function maxValue(arr: NumberArr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxValue([1, 2, 3]));

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function filteredUsers(users: User[]) {
  return users.filter((x) => x.age >= 18);
}

console.log(
  filteredUsers([
    {
      firstName: "harkirat",
      lastName: "Singh",
      age: 21,
    },
    {
      firstName: "Raman",
      lastName: "Singh",
      age: 16,
    },
  ])
);
// enum--
type KeyInput = "up" | "down" | "left" | "right";

enum Direction {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

function doSomething(keyPressed: Direction) {
  if (keyPressed == Direction.Up) {
    console.log("up");
  } else if (keyPressed == Direction.Down) {
    console.log("down");
  }
}
doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Down);
console.log(Direction.Up);
// Common usecase in express
enum ResponseStatus {
  Success = 200,
  NotFound = 404,
  Error = 500,
}

// app.get("/', (req, res) => {
//   if (!req.query.userId) {
//     res.status(ResponseStatus.Error).json({})
//   }
//   // and so on...
//   res.status(ResponseStatus.Success).json({});
// })
