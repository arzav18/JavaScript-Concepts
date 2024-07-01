/* What are objects in JS?
An object is an entity having a state and behavior (properties and methods) */

const student = {                               /* student is an object, (name,age,marks) are properties */
    studentName: "Arzav Jain",
    age: "23",
    marks: "95",
    printMarks: function () {
        console.log("marks are: ", this.marks);
    },
};


/* JS objects have a special property called Prototypes. Prototypes themselves are an object. They have their
own set of properties and methods */

/* We can set prototype using the following syntax: objectName.__proto__ */

const employee = {
    calcTax () {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary: "50000",
};

karanArjun.__proto__ = employee;
/* using the function of object `employee` by setting it as a prototype of object `karanArjun` */

/* The type of a protoype is a reference to an object
If an object and a prototype have same method, then object's method will be used */