//calculate sum of 1 to 5

let sum = 0;
for(let i = 1; i<=6; i++){
    sum = sum + i;
}
console.log(sum);


//<----------------------------------------------------------------------->//


//Print 1 to 5

for(let i = 1; i<=5; i++){
    console.log(i);
}


//<----------------------------------------------------------------------->//


//Print 1 to 5 using while loop

let i = 1;
while(i<=5){
    console.log(i);
    i++;
}


//<----------------------------------------------------------------------->//


//Print 1 to 5 using do-while loop

let i = 1;
do{
    console.log(i);
    i++;
} while(i<=6);


//<----------------------------------------------------------------------->//


//for-of loop : used to iterate over strings and array elements

let str = "javascript";
for(let i of str){
    console.log(i);
}


//<----------------------------------------------------------------------->//


//for-in loop: used to return the keys of an object

let student = {
    firstName: "javascriptop",
    age: 20,
    cgpa: 10,
    isPass: false,
}

for(let i in student){
    console.log(i, student[i]);
}


//<----------------------------------------------------------------------->//


// print all the numbers from 0-100:

for(let i = 1; i<=100; i++){
    console.log(i);
}


//<----------------------------------------------------------------------->//


//Print all the even numbers from 0-100:

for(let i=1; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}


//<----------------------------------------------------------------------->//


//Ask the user to guess the correct number

let gameNum = 25;
let userNum = prompt("Enter your number:");
while(userNum!=gameNum){
    userNum = prompt("wrong number");
}
console.log("correct number");


//<----------------------------------------------------------------------->//


//generate a username

let str = prompt("Enter your full name");
console.log("@"+str+str.length);
