function createObject(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}

function inherit(subClass, superClass) {
  subClass.prototype = createObject(superClass.prototype)
  Object.defineProperty(subClass.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: subClass
  })
}