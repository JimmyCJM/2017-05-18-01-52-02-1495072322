let Person = require('./person')
function student(name,age,klass){
  Person.call(this);
  this.klass = klass;
  this.name = name;
  this.age = age;
  this.introduce = function (){
    var a = "My name is "+this.name+". I am "+this.age+" years old. I am a Student. I am at Class "+this.class+".";  
    return a;
  }
};
Chinese.prototype = Person.prototype;}
module.exports = Student
