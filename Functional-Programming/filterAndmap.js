/* Learn about using higher order functions, taking filter() in this example
 higher order functions are the one that take other functions as arguments
 */

let animals = [
    {name : 'Fluffykins', species: 'rabbit'},
    {name : 'Caro', species: 'dog'},
    {name : 'Hamilton', species: 'dog'},
    {name : 'Harold', species: 'fish'},
    {name : 'Ursula', species: 'cat'},
    {name : 'Jimmy', species: 'fish'}
]

//normal looping approach to get all dog species out of animals array
/*
let dogs = []
for(let i of animals){
    if(i.species === 'dog')
    dogs.push(i)
}
*/

// using higher order function filter to do the same 
// the function composed within the filter func id cslled s call-bsck func
dogs = animals.filter(function(animal){
    return animal.species === 'dog';
})
// console.log(dogs)
//separately defining call-back func to make to reusable

var isDog = function(animal){
    return animal.species === 'dog';
}

// calling it with filter

dogs = animals.filter(isDog);


// another higher order function map
//using it to get a new array of names from animals
 
//usual for loop approach
let names=[]
for(let i=0; i<animals.length;i++){
   names.push(animals[i].name)
}

//using map

names = animals.map(function(animal){
    return animal.name
})

// writing it using even shorter arrow-function approcah

names = animals.map((x)=> x.name)
console.log(names)
/*Note:
filter uses condition within call back function to filter out items 
and return the filtered array while
map takes in a new transformin object within the call back func
and returns a new array of same length */