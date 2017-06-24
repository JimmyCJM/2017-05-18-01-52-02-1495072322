let Person = require('./person')
function student(name,age,klass){
  Person.call(this);
  this.klass = klass;
  this.name = name;
  this.age = age;
  this.introduce = function (){
    return "My name is "+this.name+". I am "+this.age+" years old. I am a Student. I am at Class "+this.klass+".";  
    
  }
};
module.exports = Student
