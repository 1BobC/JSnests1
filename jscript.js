// Essential practise with JS nested functions

//eyehunts - how to call an NF in JS
// function f1() {
//     var c = 0;
//     function f2() {
//         console.log (c++);
//     }
//     return f2()
// }
// //var d = 
// f1();
//d();
// d();
// d();
// let e = f1();
// e();
// e();
// e();

//code box - simple examples
//1 - basic nesting
// function demo() {
//     function demoNest() {
//         console.log("Nested called");        
//     }
//     console.log("Demo called")
//     demoNest();
// }
//     demo();
//     demoNest();

//Practical example generating a table
// function drawtable(head, data) {
//     let row = function(cells) {
//         let tr = document.createElement("tr");
//         for (let i of cells) {
//             let td = document.createElement("td");
//             td.innerHTML = i;
//             tr.appendChild(td);
//         }
//         return tr;
//     };
//     let table = document.createElement("table");
//     document.getElementById("demo").appendChild(table);

//     table.appendChild(row(head));

//     for (let i of data) {table.appendChild(row(i));}
// }

//     drawtable(
//         ["Name", "Email"],
//         [
//         ["Job", "job@doe.com"],
//         ["Joe", "joe@doe.com"],
//         ["Joey", "joey@doe.com"],
//         ["Jon", "jon@doe.com"],
//         ]
//     )

//Deep nesting Easter egg - So how does it work?
// function functionA(){
//     function functionB() {
//         function functionC() {
//             function functionD() {
//                 console.log("This is function D");
//             }
//             console.log("This is function C");
//             functionD();
//             console.log("Logged under functionD call");
//         }
//         console.log("This is function B");
//         functionC();
//         console.log("Logged under functionC cal");
//     }function f1() {
//     let c = 0; 
//     function f2() {
//     console.log(c++);
//     }
//     return f2
//     }
//     let d = f1();
//     d();
//     d();
//     d();
//     let e = f1();
//     e();
//     e();
//     functionB();
//     console.log("Logged under functionB call");
// }
// console.log("Logged above functionA call");
// functionA();
// console.log("Logged under functionA call");

//tektutorialshub - 
// function addNum(a, b){
//     function logToConsole(message){         //nested function
//         console.log(message);
//     }
//     let result = a + b;
//     logToConsole("result is " + result)     //invoke nested function
// }
//     addNum(1, 2);                           //invoke outer function 
//     logToConsole("10"s)                      //**but cannot invoke inner function**

// function makeCounter() {
//     let count = 0;

//     increment = function(){
//         return ++count;
//     };

//     return increment;
// }

// counter = makeCounter()                         //stores the nested function

// console.log(counter());                         //invokes the nested function and increments count
// console.log(counter());
// console.log(counter());
// console.log(counter());

//addCounter
// function makeCounter() {
//     let count = 0;

//     increment = function(){
//         return ++count;
//     };

//     return increment;
// }

// counter1 = makeCounter()                         //stores the nested function
// counter2 = makeCounter()

// console.log(counter1());                         //invokes the nested function and increments count
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// console.log(counter2());                         //invokes the nested function and increments count
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

//return inner function
// function outerfunc(a) {
//     innerFunc = function(b) {
//         console.log("a %d b %d", a,b)
//     };
//     return innerFunc;
// }

// InnerFunc = outerfunc(5);       //get Inner Function
// InnerFunc(3);                   //Invoke Inner Function

// outerfunc(10)(2);               //Invoke Inner Function directly

// let up = document.getElementById('GFG_UP');
// let down = document.getElementById('GFG_DOWN');
// up.innerHTML = 
// "Click on the button to call nested function.";
// function fun1(a) {
// function fun2(b) {
// return a + b;
// }
// return fun2;
// } 
// function GFG_Fun() {
// down.innerHTML = 
// fun1("An Online Computer Science Portal")
// (" Geeks for Geeks");
// }

// var up = document.getElementById('GFG_UP');
// var down = document.getElementById('GFG_DOWN');
// up.innerHTML = 
// "Click on the button to call nested function."; 
// function fun1(a) { 
// fun = function fun2(b) { 
// return a + b;
// }
// return fun;
// }
// function GFG_Fun() {
// down.innerHTML = fun1("This is ")("GeeksforGeeks");
// } 

//Linux eyehunts jscode nested functions examples
function f1() {
    let c = 0; 
    function f2() {
    console.log(c++);
    }
    return f2
    }
    let d = f1();
    d();
    d();
    d();
    let e = f1();
    e();
    e();
    
//mynest1 attempt
// function a() {
//     function a1() {
//         console.log("function a1 is calling...");
//         console.log("function a1 called...");
//     }
//         console.log("function a called...")
//         a1();         
// }
//      a();
    //  a1();    cannot call a1 frome here!
    //  result is:
    // function a called...             a() is called first
    // function a1 is calling...        a1() is called from under message 'function a called'
    // function a1 called...            continues with next message 'function a1 is called'

//mynest2 attempt
function b(){
    let x = 100;
    function c(){
    console.log(("y equals ") + (--x));
    //--x;
    }
    return c
    }
    let y= b();
    //b();
    //console.log("First y = ");
    y();
    //console.log("Second y = ");
    y();
    //console.log("Third y = ");
    y();
    
    // let z = b();
    // console.log("First z = ");
    // z();
    // console.log("Second z = ");
    // z();
    // console.log("Third z = ");
    // z();
    


    
