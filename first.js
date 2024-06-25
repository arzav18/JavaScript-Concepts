/* Events in JS: The change in the state of an object is known as Event. Eg. click, submit etc. */


/* These are event handlers */
let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
}

let div = document.querySelector("#div");

div.onmouseover = () => {
    console.log("mouse over box");
}


/* Event Objects: it is a special object that has details about the event. All event handlers have access
to the event's properties and methods */

let btn1 = document.querySelector("#btn1");

btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type);
}


/* Event Listeners: used to write events more efficiently. Multiple operations can be performed on the same event. */

/* Syntax: node.addEventListener(event, callback) */

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log("button was clicked");
})

btn1.addEventListener("click", () => {
    console.log("button 1 was clicked");
})


/* Syntax: node.removeEventListener(event, callback) ; used to remove an event*/


btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler1");
})

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2");
})

const handler3 = () => {
    console.log("button1 was clicked - handler3")
}

btn1.addEventListener("click", handler3)

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler4");
})

btn1.removeEventListener("click", handler3);


/* Note: The callback reference should be same to remove */