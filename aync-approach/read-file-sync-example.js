
var fs =  require('fs')

//  by  default async
fs.readFile

var data_one = fs.readFileSync('demo_one.txt')
console.log(data_one.toString());

var data_two = fs.readFileSync('demo_two.txt')
console.log(data_two.toString())