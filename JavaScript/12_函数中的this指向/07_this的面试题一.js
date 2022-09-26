var name = "window";

var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};

function sayName() {
  var sss = person.sayName;

  // 默认绑定 window
  sss();

  // 隐式绑定：person
  person.sayName(); 

  // 默认绑定：window
  (person.sayName)(); // right: person  

  // 默认绑定：window
  (b = person.sayName)(); 
}

sayName();
