/**
 * JS  provides error-handling using try,  catch and finally  block
 * try is the block in which we write the code in  which chances of getting errors or exceptions are high
 * catch the  block  to write code to do  something when an error occurs
 * finally is the block that always be executed wheter an error occurred or not
 */
// try{
//     addition(100,200);
// }catch(ex){
//     console.log('there is some error')
//     console.log(ex)
// }finally{
//     console.log('Finally block gets executed always')
// }
 

// function  addition(num1,num2){
//     console.log(num1+num2)
// }

var age = 15;
try{
    if(age >=18){
        console.log('You are valid to vote..!!')
    }else{
        throw {
            code:1001,
            message: "You are not  valid to vote..!!"
        }
    }
}catch(ex){
    console.log(ex.code  + ' : ' + ex.message)
    // console.log(ex)
}finally{
    console.log('Finally block gets executed always')
}