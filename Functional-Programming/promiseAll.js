
//below are 2 functions one that returns resolved and other rejected promise after n seconds

var promiseTRSANSG = (promiseThatResolvesAfterNSecondsGenerator = function(
    n = 0
  ) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({
          resolvedAfterNSeconds: n
        });
      }, n * 1000);
    });
  });

  var promiseTRJANSG = (promiseThatRejectsAfterNSecondsGenerator = function(
    n = 0
  ) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject({
          rejectedAfterNSeconds: n
        });
      }, n * 1000);
    });
  });

/*when dealing with multiple promises, it is alwyas good to store them in an iterable
and handle all at once via promise.all as demonstrated below*/

//no matter what promise completes first, the order of the promises are maintained in the values.

//promise.all resolves if all promise pass or there is no promise.
//and fails with reason of first promise that rejects from iterable

console.time("Promise.All");
var promisesArray = [];
promisesArray.push(promiseTRSANSG(1));
promisesArray.push(promiseTRSANSG(4));
promisesArray.push(promiseTRSANSG(2));

var handleAllPromises = Promise.all(promisesArray);
handleAllPromises.then(function(values) {
  console.timeEnd("Promise.All");
  console.log("All the promises are resolved", values);
});
handleAllPromises.catch(function(reason) {
  console.log("One of the promises failed with the following reason", reason);
});