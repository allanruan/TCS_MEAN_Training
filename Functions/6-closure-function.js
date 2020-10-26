/**
 * Closure means  and inner function.
 * Closure function always has access to the vars and parameter of outer function.
 * helps with  data  security
*/
 function outerFunction(){
     var count = 1;
     function innerFunction(){
         console.log(count);
     }
     return innerFunction;
}

var innerFuncResult  = outerFunction();
innerFuncResult();

function Counter()  {
    var  counter=0
    function  increaseCounter(){
        return counter+=1;
    }
    return increaseCounter;
}

var counter = Counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//  the counter variable i s not reinitialized because outter function is not called again