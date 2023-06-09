//Promise creation

//A promise can be either in pending or settled(resolved/rejected) state
//in below eg based on value of boolean promise will chose one settled state
var keepsHisWord;
keepsHisWord = false;
promise1 = new Promise(function(resolve, reject) {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesnt want to keep his word");
  }
});
// console.log(promise1);

/*in below eg we use setTimeout before resolve/reject thus promise
remains in pending state until set time*/

promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({
        message: "The man likes to keep his word",
        code: "aManKeepsHisWord"
      });
    }, 10 * 1000);
  });
//   console.log(promise2);


  //Promise handling

  var momsPromise = new Promise(function(resolve, reject) {
    momsSavings = 200000;
    priceOfPhone = 60000;
    if (momsSavings > priceOfPhone) {
      resolve({
        brand: "iphone",
        model: "6s"
      });
    } else {
      reject("We donot have enough savings. Let us save some more money.");
    }
  });
  momsPromise.then(function(value) {
    console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
  });
  momsPromise.catch(function(reason) {
    console.log("Mom coudn't buy me the phone because ", reason);
  });
  momsPromise.finally(function() {
    console.log(
      "Irrespecitve of whether my mom can buy me a phone or not, I still love her"
    );
  });