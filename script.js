// OBJECT ORIENTED PROGRAMMING in JavaScript

/*
IN OOP's there is 4 Core concepts

-Encapsulation
-Abstraction
-Inheritance
-Polymorphism

*/

//Encapsulation
/*grouping related variables and function( here methods)
that operate on them into objects
Reduce complexity + increase reusability
*/

//without encapsulation

function getWage(baseSalary,overTime,rate){
    return baseSalary+(overTime*rate);
}
console.log("no encapsulation//"+getWage(50000,10,20))
//with encapsulation
let employee={
    baseSalary:50000,
    overTime:10,
    rate:20,
    getWage: function (){
        return this.baseSalary+(this.overTime*this.rate)
    }
}

console.log("With encapsulation//"+employee.getWage());

//Remark :we have less parameter with encapsulation

//Abstraction
/*
Hiding all unecessary complexity
simpler interface 
Reduce the impact of change
*/

//Inheritance
/*
Allow us to eliminate redundant code
 */

//Polymorphism
/*
Get a rid of long if&else or switch case statement
*/


//Writing a simple object 
const rectangle={
    width:5,
    height:3,
    location:{
        x:3,
        y:2
    },
    draw: function (){
        console.log('drawing')
    }
};

rectangle.draw();

//factories
/*
For easy error handling
*/

//Factory function
function createCircle(radius){
    return{
        radius,
        draw:function(){
            console.log("Drawing a circle");
        }
    };
}

//call the factory fx to create a new Circle

const wheel=createCircle(5);
//now wheel have access to propreties and methods of CreateCircle
wheel.draw();

//Constructors function

function Square(width){
    this.width=width;
    this.draw= function(){
        console.log(`Drawing a square with ${this.width} cm as width`);
    }
}

const rubixCube= new Square(5);
rubixCube.draw();

//Function are Object

let hola=function (){
    console.log("Hola function")
}

//Value types & Reference types

let x=10;
let y=x;

//Reasign x to asnother value
x=20;
//console x and y will have different value bcz theu are different

let a={
    value:10
}
let b=x;

//here a and b will have the same value, b depend on a value
// a and b are pointing to the same value


 /* NOTE :
 
    Primitives are copied by their value;
    Object are copied by their reference
 
 */

//Adding and removing Properties

const car={
    color:"red",
}

car.mark="Toyota-Supra";
car.start=function(){
    console.log("Vroum")
}
car['owner']="Chrispaix";
car.option={
    clim:"availble",
    rings:"Chrome"
}

/*bracket notation are useful especially when you
want to access dynamically a property name*/



//Delete propreties, u can use dot or bracket notation
delete car.mark;
delete car.option;
console.log(car)

//Enumarating properties using for...in

//create an object cow

let country={
    language:["kirundi","french","english"],
    density:28900,
    belongEAC:true,
    salutation:function(name){
        console.log(`Amahoro ${name}, Mwiriwe,Mwaramutse`) ;
    },
    Cname:"Burundi",
}

for(let ikirimw in country){
    if(typeof country[ikirimw] == 'function'){
        console.log(`The function here is ${ikirimw}`)
    }
}

//check if an object has a given property

if(country.hasOwnProperty("density")){
console.log("I have it")
}else{
    console.log("I don't have it")
}

//or using in

if("density" in country){
    console.log("Founded using in")
}


//ABSTRACTION

function Triangle(height){
    this.height=height;
    //from this below 
    /*
    this.defaultLocation={ 
        x:295865,
        y:56121
    },
    */
   //to this
  let defaultLocation={
    x:295865,
    y:56121
   };
//GETTERS and SETTERS
   Object.defineProperty(this, 'defaultLocation', {
       /*define getters...be able to read only private
       or hidden by abstraction infos from outside  */
       get:function(){
           return defaultLocation;
       },
       /*
       define setter to be able to access value of
       hidden infos by abstraction and use them as well
        */
       set:function(value){
           if(value < 5){
               throw new Error('Ipu reka reka');
           }
       }
   })


    let calculateOptimumLocation=function() {
        console.log(`latitude ${defaultLocation.x} longitude ${defaultLocation.y}`)
    };
    //puting the above method into draw
    this.draw= function(){
        console.log(`Drawing a triangle with ${this.height} cm as height`);
    calculateOptimumLocation();
    };
}
const isocele= new Triangle(5);
isocele.draw();

//Private Properties and Methods
/*To do so, dont't set variable or function as property
or method, remove the this. at the beginning which
automatically make them local and no more accessible
from the outside*/


//perfom an operation via the setter function
isocele.defaultLocation=12;

//EXErcise

function Stopwatch(){
    let startTime,endTime,running,duration=0;

    this.start=function (){
        if(running)
            throw new Error('Stopwatch has already started.');
       
        running=true;

        startTime=new Date();
    };

    this.stop=function(){
        if(!running)
        throw new Error('Stopwatch not started yet');

        running=false;
        endTime=new Date();

        const seconds=(endTime.getSeconds()-startTime.getSeconds());
        duration+=seconds;
    }
    
    this.reset=function(){
        startTime=null;
        endTime=null;
        running=false;
        duration=0;
    }


    Object.defineProperty(this, 'duration',{
        get: function (){ return duration;}
    });
}

let chrono=new Stopwatch;