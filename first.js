/* Functions: */

//function to add 2 numbers:
function addNum(num1, num2){
    console.log(num1+num2);
}

addNum(1,2);


//Arrow function:

const addNum = (num1, num2) => {
    console.log(num1+num2);
}
addNum(1,2);


//Count the number of vowels in a string
function countVowel(str){
    let count = 0;
    for(const char of str){
        if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
            count++;
        }
    }
    return count;
}


//Count vowel using arrow functions

const countVowel = (str) => {
    let count = 0;
    for(const char of str){
        if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
            count++;
    }}
    return count;
}


//ForEach loop in functions

let arr = [1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val);
})



/* A callback is a function passed as an argument to another function: arr.forEach(callBackFunction) */


// Print the square of each element in an array using forEach loop
let arr = [1,2,3,4,5];

arr.forEach((val) => {
    console.log(val*val);
})


/* Maps: creates a new array with the results of some operations: arr.map(callBackFunc(val, idx, arr)) */

let arr = [1,2,3,4,5];

let newArr = arr.map((val) => {
    return val*2;
})
console.log(newArr);



/* Filter: creates a new array of elements that give true for a condition/filter */

//even numbers
let arr = [1,2,3,4,5];

let newArr = arr.filter((val) => {
    return val%2==0;
})

console.log(newArr);



/* Reduce: performs some operations, reduces the array to a single value. It returns that single value */

//Return the largest element
let arr = [1,2,3,4,5];

let output = arr.reduce((prev, curr) => {
    return prev>curr? prev:curr;
})
console.log(output);


//Filter out the marks>=90
let arr = [10,50,90,100,98];
let newArr = arr.filter((val) => {
    return val>=90;
})

console.log(newArr);