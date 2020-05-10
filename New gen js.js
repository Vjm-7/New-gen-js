
/*using let and const instead of var*/
let myName="vjm";
console.log(myName);

const myName="imthy";
console.log(myName);

/*arrow  func*/
const printName = (name,age)  =>{
  console.log(name,age);
}
printName("vjm", 23);


const multiply = number  =>{
  return number *2;
}
console.log(multiply(2));


const multiply = number  => number *2;
console.log(multiply(2));

/*understanding class*/
class Human{
  constructor(){
    this.gender="male";
    }
  
  printMygender(){
    console.log(this.gender);
  }
}

  
class Person extends Human{
  constructor(){
    super();
    this.name="vjm";
    }
  
  printMyname(){
    console.log(this.name);
  }
}


const person=new Person();
person.printMyname();
person.printMygender();


/*next gen javascript  class, properties and method*/
class Human{
  gender="male";

  printMygender =()=>{
    console.log(this.gender);
  }
}

  
class Person extends Human{
  name="vjm";
  
  printMyname =()=>{
    console.log(this.name);
  }
}


const person=new Person();
person.printMyname();
person.printMygender();


/*spread operator*/

const person={
  name:'vjm'
};

const newPer={
  ...person,
  age:22  
};

console.log(newPer);


/*spread operator*/
const filter=(...args)=>{
  return args.filter(el => el ===1);
}
console.log(filter(1,2,3));


/*Destructing*/



const number=[1,2,3];
[num1, , num3]=number

  console.log(num1, num3);
  
  
  
const [a,b]=["max","vjm"];
console.log(a);
console.log(b);


/*number strings boolean are primitive type where as object and arrays are reference type*/
