function to_Number(g){
   return g(add1)(0);
}

function compose_mult(m,n){
   return x => m(n(x));
}

function succ(m = f => x => m(f)(x)){
   return f => x => m(f)(f(x));
}

var add1 = x => x + 1;
var square = x => x * x;
var mult3 = x => x * 3;


var two = f => x => f(f(x));
var three = succ(two);
var four = succ(three);
var five = succ(four);
var six = succ(five);
var seven = succ(six);
var eight = succ(seven);
var nine = succ(eight);

console.log("to_Number(nine) = "+to_Number(nine));
console.log("to_Number(compose_mult(three,four)) = "+to_Number(compose_mult(three,four)));
console.log("compose_mult(eight(add1),nine(add1))(0) = "
+compose_mult(eight(add1),nine(add1))(0));
console.log("compose_mult(two,three)(square)(2) = 2^64 = "+compose_mult(two,three)(square)(2));
//compose_mult(two(three(square)(0))); three(square) = x => x^8, two(x^8) = x^64
console.log("compose_mult(five,six)(mult2)(1) = 3^30 = "+compose_mult(five,six)(mult3)(1));
