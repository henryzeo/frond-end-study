"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}

/**
 * @func _inherits
 * @desc 实现 subClass 继承自 superClass
 * @param {function} subClass 子类
 * @param {function} superClass 父类
 */
function _inherits(subClass, superClass) {
  // 判断传入的父类是否为空以及是一个函数，如果不是函数，不为空抛出异常
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  // 根据父类的显式原型创建子类的显式原型对象
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  // 设置显式原型为不可写
  Object.defineProperty(subClass, "prototype", { writable: false });
  // 如果父类存在，设置子类的隐式原型指向父类
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/**
 * @func _setPrototypeOf
 * @desc 将子类的隐式原型指向父类
 * @param {function} o 子类
 * @param {function} p 父类
 * @return {}
 */
function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

/**
 * @func _createSupper
 * @desc 
 * @param {} 
 * @return {} 
 */
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    // 获取派生类（子类）的隐式原型-》也就是父类
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

/**
 * @func _isNativeReflectConstruct
 * @desc 判断当前浏览器是否支持reflect
 * @return {boolean} 支持 return true 不支持 return false
 */
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * @func _getPrototypeOf
 * @desc 获取子类的隐式原型
 * @param {function} o 子类
 * @return {}
 */
function _getPrototypeOf(o) {
  // debugger
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}

// 纯函数，立即执行函数
// 创建一个Person类
var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(
    Person,
    [
      {
        key: "running",
        value: function running() {}
      },
      {
        key: "eating",
        value: function eating() {}
      }
    ],
    [
      {
        key: "randomPerson",
        value: function randomPerson() {}
      }
    ]
  );

  return Person;
})();

// 纯函数，立即执行函数
// 传入Person参数：与其他代码低耦合
// 创建一个Student类
var Student = /*#__PURE__*/ (function (_Person) {
  // debugger
  // 实现继承
  _inherits(Student, _Person);

  // 创建super，用于实现子类继承父类属性
  var _super = _createSuper(Student);

  // 声明Student的构造函数
  function Student(name, age, sno, score) {
    var _this;

    // 检测函数调用方式
    _classCallCheck(this, Student);

    // 借用构造函数实现继承父类属性
    _this = _super.call(this, name, age);
    _this.sno = sno;
    _this.score = score;
    return _this;
  }

  // 创建Student类
  // 将实例方法和静态方法添加到Student类中
  _createClass(Student, [
    {
      key: "studying",
      value: function studying() {}
    }
  ]);

  return Student;
})(Person);

var p = new Person("kobe", 18);
var s = new Student("curry", 10, 101, 100)

console.log(p)