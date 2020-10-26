var  fs = require('fs')

//Read File Asynchronously second argument is callback function
fs.readFile('demo_one.txt',function (err, data){
    if(err) {
        console.log(err);
    }
    else{console.log(data.toString())};
})

//js is single thread
fs.readFile('demo_two.txt',function (err, data){
    if(err) {
        console.log(err);
    }
    else{console.log(data.toString())};
})