"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Classes
 */
var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
    }
  }]);

  return List;
}();

var Task =
/*#__PURE__*/
function (_List) {
  _inherits(Task, _List);

  function Task() {
    _classCallCheck(this, Task);

    return _possibleConstructorReturn(this, _getPrototypeOf(Task).apply(this, arguments));
  }

  _createClass(Task, [{
    key: "retrieveAll",
    value: function retrieveAll() {
      return this.data;
    }
  }]);

  return Task;
}(List);

var task = new Task();
task.add("Task 01");
task.add("Task 02");
task.add("Task 03");
console.log("All tasks", task.retrieveAll());
/**
 * Arrays e Arrow functions
 */

var arr = [1, 5, 7, 9, 11, 14];
var newArr = arr.map(function (item, index) {
  return item * index;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 3;
});
console.log(find);

var teste = function teste() {
  return "teste";
};

console.log(teste());
/**
 * Defautl values
 */

var func = function func() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return a + b;
};

console.log(func());
console.log(func(1, 1));
/**
 * Destructuring
 */

var user = {
  name: "Raphael",
  age: 25,
  address: {
    city: "São Carlos",
    estado: "SC"
  }
};
console.log(user);
var name = user.name,
    city = user.address.city;
console.log(name, city);

var dest = function dest(_ref) {
  var name = _ref.name;
  return console.log(name);
};

dest(user);
