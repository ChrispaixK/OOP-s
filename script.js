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

//Constructor properties
