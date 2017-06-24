function Person(name,age){
  this.name = name;
  this.age = age;
  this.introduce = function (){
    var a="My name is " + this.name + ". I am " + "this.age" + " years old.";
    return a;
  }
}
module.exports = Person
