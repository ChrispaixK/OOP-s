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
that operate on them into objects*/

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