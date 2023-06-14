/*The destructuring assignment syntax is a JavaScript expression 
that makes it possible to unpack values from arrays, or properties
 from objects, into distinct variables. */


 //binding pattern of destructure  : the pattern starts with a declaration keyword
 let orgs = ['Walmart', 'Airtel','Infosys']

 let [tanishq, vedansh, abhinav] = orgs;

 console.log(tanishq);

//assignment psttern of destructure: the pattern does not start with a declaration keyword
const numbers = [];
const obj = { t: 'bangalore', v: 'gurgaon' };
({ t: numbers[0], v: numbers[1] } = obj);
// numbers[0] = obj.t;

console.log(numbers);


/*
for more eg's and better understanding -refer doc on mdnwebdocs
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/