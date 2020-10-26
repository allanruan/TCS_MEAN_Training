var number=100;

function MyFunc(){
    //var sets local variable
    // var number =  200;
    this.number =  200;
    console.log(number);
    console.log(this.number)
}

// myFunc()

var  obj = new MyFunc();
console.log(obj.number)