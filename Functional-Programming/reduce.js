// another higher order function reduce()

/*
Unlike map and filter that are quite specific reduce helps you transform a list/or a perform operation as per
your need.
eg below
*/ 
var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
  ]
  
  var totalAmount = orders.reduce(function(sum, order) {
    return sum + order.amount
  }, 0)
  console.log(totalAmount)

/* use reduce function chained along with other functions to read from data.txt and create an object literal
with names as key and product, price and quantity as key value pairs within those keys
*/
const fs = require('fs')     //to read file

let output = fs.readFileSync('data.txt', 'utf-8')
console.log('output', output)