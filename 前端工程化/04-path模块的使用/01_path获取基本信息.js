const path = require("path");

const filepath = ("D://Program Files//Git//LICENSE.txt");

console.log(path.extname(filepath));

// 拼接绝对路径
console.log(path.resolve(__dirname, "./abc.txt"));