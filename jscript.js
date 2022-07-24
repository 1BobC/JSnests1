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

//Deep nesting Easter egg
function functionA(){
    function functionB() {
        function functionC() {
            function functionD() {
                console.log("This is function D");
            }
            console.log("This is function C");
            functionD();
            console.log("Logged under functionD call");
        }
        console.log("This is function B");
        functionC();
        console.log("Logged under functionC cal");
    }
    console.log("This is function A");
    functionB();
    console.log("Logged under functionB call");
}
console.log("Logged above functionA call");
functionA();
console.log("Logged under functionA call");