//Update an array:

let sum = 0;
let arr = [1,2,3,4,5];
for(let i=0; i<arr.length; i++){
    let offer = arr[i]/10;
    arr[i] -= offer;
}
console.log(arr);


////<---------------------------------------------------------------------->


/*Array methods:
1) arr.push(): pushes the element to the end of an array
2) arr.pop(): deletes from end and return
3) arr.toString(): converts array to string
4) arr.concat(): joins multiple arrays and return a new one: let newArr = arr1.concat(arr2);
5) arr.unshift(): adds an element to the starting of an array
6) arr.shift(): deletes an element from the start and return
7) arr.slice(): returns a slice of an array: arr.slice(startIndex, endIndex)
8) arr.splice(): changes original array (add, remove, replace): arr.splice(startIndex, delCount, newElements);
*/

//Ques

let arr = ['b', 'm', 'u', 'g', 'i', 'n'];

//remove first element from array:
arr.shift();
console.log(arr);

//remove u and add o:
arr.splice(1, 1, 'o' );
console.log(arr);

//add a at the end:
arr.push('a');
console.log(arr);