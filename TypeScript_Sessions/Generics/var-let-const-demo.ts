/**
 * Variables in TS can be declared using let, var, and const
 * var is function scoped
 * let & const is block scoped
 * var variables can be redefined or updated
 * var can be accessed before they are declared (Hoisting)
 * const cannot be reassigned.
 */
// var value = 100;
//  function func(){
//      if(true){
//          var value = 200;       //defined locally (the scope ends when curly brace ends)
//          console.log(value);
//      }
//      console.log(value);
//      function innerFunc(){
//          console.log(value);
//      }
//  }

//  func();
//  console.log(value);        //Error

const value = 100;
function func(){
    if(true){
        value = 200;    //Defined locally (the scope ends when curly brace ends)
        console.log(value)
    }
    console.log(value);
}

 func();
 console.log(value);        //Error