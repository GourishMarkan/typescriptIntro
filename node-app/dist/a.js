"use strict";
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("harkirat");
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
function isLegal1(age) {
    return age > 18 ? true : false;
}
console.log(isLegal1(12));
function first() {
    console.log("first func");
}
function second(fn, time) {
    setTimeout(fn, time);
}
second(() => console.log("hi there"), 2000);
function isLegal(user) {
    return user.age >= 18 ? true : false;
}
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
function printId(id) {
    console.log(`ID: ${id}`);
}
printId(101); // ID: 101
printId("202"); // ID: 202
const teamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer",
};
function maxValue(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([1, 2, 3]));
function filteredUsers(users) {
    return users.filter((x) => x.age >= 18);
}
console.log(filteredUsers([
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
]));
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == Direction.Up) {
        console.log("up");
    }
    else if (keyPressed == Direction.Down) {
        console.log("down");
    }
}
doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Down);
console.log(Direction.Up);
