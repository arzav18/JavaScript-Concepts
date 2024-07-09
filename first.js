/* Synchronous:
Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction
waits for the previous instruction to complete its execution. */

/* Asynchronous:
To avoid a delay in the UI and in the execution of some important block of code, asynchronous functions are used
that allows to execute next instructions immediately and doesn't block the code. */

/* Function to demonstrate asynchronous programming using setTimeout(): */

console.log("one");
console.log("two");

setTimeout(() => {
  console.log("hello");
}, 4000);

console.log("three");
console.log("four");

/* Expected output:
one
two
three
four
hello
setTimeout() will take it's time to execute the code, thus will not stop the execution of other blocks of code. */




/* BEST METHOD FOR WRITING ASYNCHRONOUS CODE:
   Callback Hell < Promise < Promise Chaining < Async-Await
*/




/* Callbacks:
A callback is a function passed as an argument to another function. */

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 2, sum); //function "sum" passed as an argument in another function "calculator" , synchronous callback

function hello() {
  console.log("hello");
}

setTimeout(hello, 3000); //Asynchronous callback

/* Eg. Callback hell and get data one by one after 2sec */

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});




/* Promises:
Promises are for eventual completion of a task. It is an object in JS. It is a solution to callback hell.
Syntax: let promise = new Promise((resolve, reject) => {...})

resolve and reject are callbacks provided by JS */

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      // resolve("success");
      reject("error");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    // resolve("success");
    reject("error");
  });
};

let promise = getPromise();
promise.then((res) => {
  //res and err are the messages that will be displayed depending on success or failure
  console.log("fullfiled", res); //This message will not print if the promise fails
});

promise.catch((err) => {
  //Function to catch the error
  console.log("rejected", err);
});

/* Example on how to use promises.*/

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 5000);
  });
}

console.log("fetching data1.....");

let p1 = asyncFunc1();
p1.then((res) => {
  console.log(res);
});

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 7000);
  });
}

setTimeout(() => {
  console.log("fetching data2.....");
}, 6000);

let p2 = asyncFunc2();
p2.then((res) => {
  console.log(res);
});

function asyncFunc3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data3");
      reject("error");
    }, 10000);
  });
}

setTimeout(() => {
  console.log("fetching data3......");
}, 8000);

let p3 = asyncFunc3();
p3.then((rej) => {
  console.log(rej);
});




/* Promise Chain:
method to use .then() inside .then(). Will fetch data1 first, then data2... */

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 5000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 5000);
  });
}

console.log("fetching data1....");
asyncFunc1().then((res) => {
  console.log(res);
  console.log("fetching data2....");

  asyncFunc2().then((res) => {
    console.log(res);
  });
});




/* Async-Await method:
async function always returns a promise.
await pauses the execution of it's surrounding async function until the promise is settled. */

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 5000);
  });
}

async function getWeatherData() {
  await api(); //1st call
  await api(); //2nd call
}

/* Example on how to use async-await */

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 3000);
  });
}

async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
}




/* IIFE: Immediately Invoked Function Expression. Type of function that executes instantly without calling them.

Syntax:

( function() {
 }) ();

*/

(async function () {
  console.log("getting data1...");
  await getData(1);
  console.log("getting data2...");
  await getData(2);
  console.log("getting data3...");
  await getData(3);
})();
