"use strict";

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

/**
 * @func _createClass
 * @desc 将实例方法和静态方法添加到Constructor中
 * @param {function} Constructor 构造函数
 * @param {Array} protoProps 所有实例方法
 * @param {Array} staticProps 所有静态方法
 * @return {function} Constructuor
 */
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}

// 纯函数，立即执行函数

var Person = /*#__PURE__*/ (function () {
  // 声明一个构造函数
  function Person(name, age) {
    // 检测函数的调用方式
    _classCallCheck(this, Person);

    // 初始化属性值
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

var p = new Person("kobe", 18);
