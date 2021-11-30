function to_Number(g){
   return g(add1)(0);
}

function compose_plus(m,n){
   return f => x => m(f)(n(f)(x));
}

function succ(m = f => x => m(f)(x)){
   return f => x => m(f)(f(x));
}


/*var two = f => compose_plus(f,f);
var three = f => compose_plus(f,two(f));
var four = f => compose_plus(f,three(f));
var five = f => compose_plus(f,four(f));
var six = f => compose_plus(f,five(f));
var seven = f => compose_plus(f,six(f));
var eight = f => compose_plus(f,seven(f));
var nine = f => compose_plus(f,eight(f));*/

var add1 = x => x + 1;
var square = x => x * x;
var mult3 = x => 3 * x;

var two = f => x => f(f(x));
var three = succ(two);
var four = succ(three);
var five = succ(four);
var six = succ(five);
var seven = succ(six);
var eight = succ(seven);
var nine = succ(eight);


console.log("to_Number(nine) = "+to_Number(nine));
console.log("to_Number(compose_plus(three,four)) = "+to_Number(compose_plus(three,four)));
console.log("compose_plus(eight,nine)(mult3)(1) = 3^17 ="+compose_plus(eight,nine)(mult3)(1));
console.log("compose_plus(two,three)(square)(2) = 2^32 = "+compose_plus(two,three)(square)(2));
console.log("compose_plus(five,six)(add1)(0) = "+compose_plus(five,six)(add1)(0));
