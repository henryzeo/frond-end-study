function createObject(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}

function inherit(subType, superType) {
  subType.prototype = createObject(superType.prototype)
  Object.defineProperty(subType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: subType
  })
}