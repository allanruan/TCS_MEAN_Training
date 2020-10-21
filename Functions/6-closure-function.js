/**
 * Closure means  and inner function.
 * Closure function always has access to the vars and parameter of outer function.
 *helps with  data  security
 * /

 function outerFunction(){
     var count = 1;
     function innerFunction(){
         console.log(count);
     }
     return innerFunction;
}

var innerFuncResult  = outerFunction();
innerFuncResult();
