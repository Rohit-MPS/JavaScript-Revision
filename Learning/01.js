
// let name = "Rohit";

// console.log(name);



// data types -> primitive -> number , boolean , string , undefined , null , bigint , Symbol
//            -> not primitive or referenced -> object , function , array



// const lastName = prompt("Enter your lastName");

// const fullName = name + lastName;
// alert(name + " " + lastName);



// const age = prompt("Enter Your Age : ");

// if(age >= 18){
//     alert("Eligible for drive");
// }
// else{
//     alert("Not Eligible for drive");
// }

// let temp = null;
// let temp1;

// console.log(typeof(temp));
// console.log(typeof(temp1));


// const obj = {
//     "name" : "Rohit",
//     "RollNO" : "2022UCD2169"
// }

// let arr = [1,5,6,4,5,6];

// console.log(arr);
// const sortedArr = arr.sort();

// console.log(sortedArr);



// arr.push(10); // at last
// arr.unshift(11); // at front
// arr.pop(); // remove last
// arr.shift(); // remove front

// console.log(arr);
// const newArr =  arr.splice(2,2,123,55);
// console.log(newArr);
// console.log(arr);


// const slicing = arr.slice(0,4);
// console.log(slicing);



// let concatinating = arr.concat( [1023,3] );
// console.log(concatinating);

// console.log(concatinating.indexOf(1023));
// console.log(concatinating.indexOf(102));

// console.log(concatinating.lastIndexOf(6));
// console.log(concatinating.includes(123));
// console.log(concatinating.includes(7));

// console.log(concatinating.find((x) => x > 5))  // iterate till it find the condition true and then return that element
// console.log(concatinating.findIndex((x) => x > 5))  // iterate till it find the condition true and then return that element's index


// // concatinating.forEach((x) => console.log(x));

// concatinating = concatinating.map((x) => x*x);
// console.log(concatinating);

// concatinating = concatinating.filter((x) => x > 5333);
// console.log(concatinating);


// let sum = arr.reduce((sum,x) => sum + x, 0);
// console.log(sum);


// let arr1 = arr.join("-");
// console.log(arr1);

// arr.fill(0);
// console.log(arr);

// let arr2 = arr.entries();
// console.log(arr2);

// for(let i of arr.entries()){
//     console.log(i);
// }

// for(let i of arr.keys()){
//     console.log(i);
// }

// for(let i of arr.values()){
//     console.log(i);
// }

// let arr2 = Array.of(1,2,3);
// console.log(arr2);





// const arr3 = [...arr2,3,4];
// console.log(arr3);


// //string
// console.log(typeof("Rohit"));

// //number
// console.log(typeof(4));
// console.log(typeof(NaN)); //⭐⭐

// //function
// console.log(typeof(()=>console.log(3)));
// console.log(typeof(function () {}));

// //object
// console.log(typeof({}));
// console.log(typeof([]));
// console.log(typeof(null));  //⭐⭐

// //boolean
// console.log(typeof(true));

// //bigint
// console.log(typeof(123n));

// //symbol
// console.log(typeof(Symbol('2')));

// //undefined , since x is not have any value and has not declared
// console.log(typeof(x));







// Hoisting


// greet();

// function greet() {
//     console.log("Hello");
// }



// console.log(x);
// var x = 3;




// function declartion -> hoisted

// function greet() {
//     console.log("Hello");
// }

// greet();


// function expression -> not hoisted
// const greet = function(){
//     console.log("Hello");
// }
// greet();


// arrow function
// const greet = () => {
//     console.log("Hello");
// }

// greet();



// named function expression
// const greet = function sayHello() {
//     console.log("Hello");
// }
// greet();



// IIFE -> Immediately Invoked Function Expression

// (function () {
//     console.log("Hello");
// })();

// (() => {console.log("Hello")})();


// constructor function
// function rectangle(len,bre){
//     this.len = len;
//     this.bre = bre;
//     this.area = () => {console.log(len*bre)};
// }

// const rec = new rectangle(3,4);
// console.log(rec.area());



// callback function -> Function passed as argument
// function greet(name, callback){
//   console.log("Hi " + name);
//   callback();
// }

// greet("Rohit", function(){
//   console.log("Welcome!");
// });




// higher order function -> Function that takes another function or returns one
// function operate(a,b,func){
//   return func(a,b);
// }

// console.log(operate(2,3,(x,y)=>x+y));




// generator function -> generator function in JavaScript is a special type of function that can pause execution and resume later.

// It does not run fully at once. Instead, it returns values step-by-step when you ask for them.
// It uses function* (star symbol).


// function* numbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let gen = numbers();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());



// output 
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }


// Generator function is a function that:
// pauses execution using yield
// resumes later using next()
// returns multiple values over time instead of one








// function sum(a,b=6,c=9){
//     console.log(a + b + c);
// }

// sum(4);


// spread opeator
// const arr = [...[2,3,4],4,5];
// // console.log(arr);


// function sum(a,b,...arr){
//     let sum = 0;
//     for(let i of arr){
//         sum += i;
//     }   
//     return a + b + sum;
// }

// console.log(sum(1,2,3,4,5));



// let arr = [1,2,3];

// arr = arr.map(x => [x,x]);
// arr = arr.flat(1);
// console.log(arr);
// // same as
// // arr.flatMap(x => [x,x]);




// let obj = {
//     name : "Rohit",
//     age : 22,
//     rollNo : "2022UCD2169",
//     city : "Delhi"
// }

// for(let key in obj){
//     console.log(key + " : " + obj[key]);
// }

// let keys = Object.keys(obj);
// console.log(keys);

// let values = Object.values(obj);
// console.log(values);

// let entries = Object.entries(obj);
// console.log(entries);

// for(let i in Object.entries(obj)){
//     console.log(i);
// }




// let person = {name:"Rohit", age:25};

// let {name, age} = person;
// console.log(name,age);





// let obj = {
//     name : "Rohit",
//     age : 22,
//     rollNo : "2022UCD2169",
//     address : {
//         city : "Delhi"
//     }
// }


// // shallow copy
// let copy = {...obj};

// console.log(obj);
// console.log(copy);

// copy.address.city = "UK";

// console.log(obj);
// console.log(copy);



// deep copy
// let copy = JSON.parse(JSON.stringify(obj));

// console.log(obj);
// console.log(copy);

// obj.city = "UK";

// console.log(obj);
// console.log(copy);





// let person = {
//   name: "Rohit",
//   age: 22
// };

// // let {name,age} = person;

// // console.log(name,age);



// // rename variable
// let {name: userName} = person;

// console.log(userName);
// console.log(name);




// const arr = [1,2,3];
// console.log(arr?.[3]);







// const API_URL = "https://fakestoreapi.com/products";
// const CATEGORY_URL = "https://fakestoreapi.com/products/categories";



// async function fetchdata() {

//     try {
//         const res = await fetch(CATEGORY_URL);
//         const data = await res.json();

//         console.log(data);

//     } 
//     catch (error) {
//         console.log("Not able to fetch data : ", error);
//     }

// }

// fetchdata();



// async function test() {
//     console.log(10);
// }

// console.log(test());



// const promise = new Promise(function (reject,resolve) {
//     console.log("Inside Promise");

//     resolve(100);
// })
// .then(() => {console.log("Inside then")})
// .catch(() => {console.log("Inside catch")})



// console.log("Rohit")
// console.log("Say");

// setTimeout(() => {
//     console.log("Rohit");
// },2000);

// console.log("Hello to -> ");



// setInterval(() => {
//     console.log("Rohit");
// },5000);






// sequential

// const API_URL = "https://fakestoreapi.com/products";
// const CATEGORY_URL = "https://fakestoreapi.com/products/categories";


// async function fetchdata() {

//     try {
//         const t1 = performance.now();

//         const res = await fetch(CATEGORY_URL);
//         const res2 = await fetch(API_URL);


//         const data = await res.json();
//         const data2 = await res2.json();

//         const t2 = performance.now();

        
//         console.log(data2);
//         console.log(data);
        
//         console.log(t2 - t1);
//     } 
//     catch (error) {
//         console.log("Not able to fetch data : ", error);
//     }

// }

// fetchdata();





// parallel

// const API_URL = "https://fakestoreapi.com/products";
// const CATEGORY_URL = "https://fakestoreapi.com/products/categories";

// async function fetchdata() {
//     try {
//         const t1 = performance.now();

//         const [res, res2] = await Promise.all([
//             fetch(CATEGORY_URL),
//             fetch(API_URL)
//         ]);

//         const [data, data2] = await Promise.all([
//             res.json(),
//             res2.json()
//         ]);

//         const t2 = performance.now();

//         console.log(data2);
//         console.log(data);

//         console.log(t2 - t1);
//     } 
//     catch (error) {
//         console.log("Not able to fetch data : ", error);
//     }
// }

// fetchdata();





const API_URL = "https://fakestoreapi.com/products";
const CATEGORY_URL = "https://fakestoreapi.com/products/categories";

try {

    const [res] = await Promise.all([
        fetch(CATEGORY_URL)
    ]);

    const [data] = await Promise.all([
        res.json()
    ]);

    console.log(data);
    
} catch (error) {
    console.log("Error, ", error);
}

