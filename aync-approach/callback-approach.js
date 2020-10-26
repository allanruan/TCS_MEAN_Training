var  fs = require('fs');

// fs.readFile('source_one.txt',  function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         fs.writeFile('destination_file.txt',  data,function(err){
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('Data copied from source_one to destination file successfully');
//             }
//         });
//     }
// })


//Call  back  hell
// fs.readFile('sample_one.txt', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.readFile('source_two.txt', data, function (err) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 fs.writeFile('destination.txt', data, function (err) {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log('Data copied from source_one.txt');
//                     }
//                 })
//             }
//         })
//     }
// })

//Promise: solution to  callback hell 