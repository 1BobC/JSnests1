// Essential practise with JS nested functions

//eyehunts - how to call an NF in JS
function f1() {
    var c = 0;
    function f2() {
        console.log (c++);
    }
    return f2()
}
//var d = 
f1();
//d();
// d();
// d();
// let e = f1();
// e();
// e();
// e();

