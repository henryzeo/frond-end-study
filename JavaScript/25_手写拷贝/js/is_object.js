function isObject(obj) {
  let type = typeof obj;
  // null/array/function/object -> 都是对象
  // null -> Object
  // array -> Object
  // funciton -> function
  // object -> Object
  return type === "function" || (type === "object" && !!obj);
}