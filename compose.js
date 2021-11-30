function compose(f = x => f(x),g = x => g(x)){
   return x => g(f(x));
}
var add1 = x => x + 1;
var square = x => x * x;
var two = f => compose(f,f); 

// two(f) is well defined, but two is not, for return x => f(g(x));
var three = f => compose(f,two(f));
var four = f => compose(f,three(f));
var five = f => compose (f,four(f));
var six = f => compose(f,five(f));

console.log("two(add1)(0) = "+two(add1)(0));
console.log("three(add1)(0) = "+three(add1)(0));
console.log("four(add1)(0) = "+four(add1)(0));
console.log("two(square)(2) = "+two(square)(2));
console.log("three(square)(2) = "+three(square)(2));
console.log("four(square)(2) = "+four(square)(2));

/*var two = f => x => f(f(x));
var ss = x => add1(add1(x));
var two_add1 = x => add1(add1(x));
if (two_add1 == ss){console.log("True");}*/ 
/*As for two = f => compose(f,f); 
f is not the inductive function f(g(f)(x)) not well defined!!*/
