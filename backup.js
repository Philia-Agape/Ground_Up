function succ(m = f => x => m(f)(x)){
   return f => x => m(f)(f(x));
}

var add1 = x => x + 1;
var one = f => x => f(x);
var two = f => x => succ(one);
var three = succ(two);
var four = succ(three);
var five = succ(four);
var six = succ(five);
var seven = succ(six);
var eight = succ(seven);
var nine = succ(eight);

function to_Number(g = f => x => g(f)(x)){
   if (g == one){return 1;}
   if (g == two){return 2;}
   if (g == three){return 3;}
   if (g == four){return 4;}
   if (g == five){return 5;}
   if (g == six){return 6;}
   if (g ==  seven){return 7;}
   if (g ==  eight){return 8;}
   if (g == nine){return 9;}
}
function plus(m = f => x => m(x), n = f => x => n(x)){
   return g= f => x => m(f)(n(f)(x));
}

console.log("to_Number(two) = "+to_Number(plus(two,three)));
console.log("to_Number(two) = "+plus(two,two)(add1)(0));

 /*if (g == f => x => f(x){return 3;}
   if (g == f => x => f(f(x))){return 4;}
   if (g == f => x => f(f(f(x)))){return 3;}
   if (g == f => x => f(f(f(f(x))))){return 4;}
   if (g == f => x => f(f(f(f(f(x)))))){return 5;}
   if (g == f => x => f(f(f(f(f(f(x))))))){return 6;}
   if (g == f => x => f(f(f(f(f(f(f(x)))))))){return 7;}
   if (g == f => x => f(f(f(f(f(f(f(f(x))))))))){return 8;}
   if (g == f => x => f(f(f(f(f(f(f(f(f(x)))))))))){return 9;}*/
