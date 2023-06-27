// an example to show function in javascript

function greeting(firstNAme, lastName = 'Roy'){
    //body
    console.log('Hello ' + firstNAme + ' ' + lastName)
}

//call
// greeting('Tanishq','Vyas');   // output- Hello Tanishq Vyas
// greeting('Tanishq');          // output- Hello Tanishq undefined  in case of no default value in parameter list
// greeting();                   // output- Hello undefined Roy  


// declaring the above function as an anonymous function i.e without name
// Used as call back functions in higher order functions like map,filter etc
let greet = function(firstNAme,lastName){
    console.log('Hi',firstNAme,lastName);
} 
greet('Abhinav','Pathak');     
/* Note: anonymous function can only be acccessed after its initialisation via
a variable to which it is assigned*/

//a self executing anonymous functions
//also called IIFE(Immediately Invoked function expression)
(function(){
 console.log('Hey i am self-executing anonyosus func');
})();

// declaring anonymoys functions using arrow functions technique-a clear and shorter way

let shorterGreet = (firstNAme,lastName)=> {console.log('Hi',firstNAme,lastName);} 
// curly braces optional for single expression
shorterGreet('vedansh','porwal');