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
