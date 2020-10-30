/**
 * promise - assurance that one  will do something or something will happen
 * promise: helps in writing async code.
 * it also help us to avoid a callback hell.
 * first we create promise and then we handle them
 * promise in JS can be either resolved or rejected
 */


 var promise =  new Promise(function (resolve,reject){
     var status = true;
     if(status){
         //args  are passed to then
         resolve("Your status is active..");
     }else{
         //arg passed to catch
         reject("Your Status is inactive.")
     }
 })

 promise.then(function(data){
     console.log("then invoke..")
     console.log(data);
 }).catch(function(error){
     console.log('catch  invoked..')
     console.log(error);
 })

