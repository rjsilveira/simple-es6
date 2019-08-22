/**
 * Classes
 */
class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
  }
}

class Task extends List {
  retrieveAll() {
    return this.data;
  }
}

const task = new Task();
task.add("Task 01");
task.add("Task 02");
task.add("Task 03");
console.log("All tasks", task.retrieveAll());

/**
 * Arrays e Arrow functions
 */
const arr = [1, 5, 7, 9, 11, 14];

const newArr = arr.map((item, index) => item * index);
console.log(newArr);

const sum = arr.reduce((total, next) => total + next);
console.log(sum);

const filter = arr.filter(item => item % 2 === 0);
console.log(filter);

const find = arr.find(item => item === 3);
console.log(find);

const teste = () => "teste";
console.log(teste());

/**
 * Defautl values
 */
const func = (a = 3, b = 5) => a + b;
console.log(func());
console.log(func(1, 1));

/**
 * Destructuring
 */
const user = {
  name: "Raphael",
  age: 25,
  address: {
    city: "São Carlos",
    estado: "SC"
  }
};
console.log(user);
const {
  name,
  address: { city }
} = user;
console.log(name, city);

const dest = ({ name }) => console.log(name);
dest(user);

/**
 * Rest
 */
const user2 = {
  name2: "Raphael",
  age: 25,
  address: {
    city: "São Carlos",
    estado: "SC"
  }
};
const { name2, ...rest } = user2;
console.log(name2, rest);

const arr2 = [1, 2, 3, 4];
const [a, b, ...c] = arr2;
console.log(a, b, c);

const soma = (...params) => params.reduce((total, next) => total + next);
console.log(soma(a, b));

/**
 * Spread
 */
const arrSpread1 = [1, 2, 3];
const arrSpread2 = [4, 5, 6];
const arrTotal = [...arrSpread1, ...arrSpread2];
console.log(arrTotal);

const raphael = {
  name: "Raphael",
  age: 23
};

const raphael2 = { ...raphael, age: 25 };
console.log(raphael2);

/**
 * Template
 */
const username = "Raphael";
const userAge = 25;

console.log(`Meu nome é ${username}, e minha idade é ${userAge}`);

/**
 * Object Short syntax
 */
const username2 = "Raphael";
const userAge23 = 25;

const userObject = { username2, userAge23 };
console.log(userObject);

import { somaexterna } from "./funcoes";
console.log(somaexterna(1, 1));
