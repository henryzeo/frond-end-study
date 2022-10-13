"use strict";

/**
 * @func _defineProperties
 * @desc 添加默认函数
 * @param {Object} target 目标对象
 * @param {arr} props 包含需要添加的函数的数组
 */
function _defineProperties(target, props) {
  // 循环添加新属性
  for (var i = 0; i < props.length; i++) {
    // 获取第i函数
    var descriptor = props[i];
    // 设置可枚举属性
    descriptor.enumerable = descriptor.enumerable || false;
    // 设置可配置属性
    descriptor.configurable = true;
    // 如果有value，则设置可写属性
    if ("value" in descriptor) descriptor.writable = true;
    // 给目标对象添加默认函数
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

/**
 * @func _createClass
 * @desc 创建一个Class
 * @param {function} Constructor
 * @param {function} protoProps
 * @param {function} Constructor
 * @return {class} Constructor
 */
function _createClass(Constructor, protoProps, staticProps) {

  // 如果有实例属性，将实例属性添加到构造函数的显式原型中
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  // 如果有静态属性，将静态属性添加到构造函数中
  if (staticProps) _defineProperties(Constructor, staticProps);
  // 设置构造函数的显式原型不可写
  Object.defineProperty(Constructor, "prototype", { writable: false });
  // 返回类
  return Constructor;
}


/**
 * @func _classCallCheck
 * @desc 检测函数的调用方式
 * @param {any} instance
 * @param {class} Constructor
 */
function _classCallCheck(instance, Constructor) {
  // 如果 instance 不是 Consturctor 的实例，抛出错误
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

debugger
// 调用纯函数创建一个类, 传入新创建的构造函数
// 纯函数：相同的输入一定产生相同的输出，并且不会产生副作用
// tree shaking 如果代码创建之后，打包时还用不到的话，进行tree shaking，删除用不到的代码
var Person = /*#__PURE__*/ _createClass(function Person() {
  // 检测函数的调用方式
  _classCallCheck(this, Person);
});

// function Person() {
//   _classCallCheck(this, Person);
// }
// var Person = /*#__PURE__*/ _createClass(Person);
