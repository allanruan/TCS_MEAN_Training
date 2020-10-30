/**
 * for loop
 * for of loop: iterates elements of collection
 * for in loop: iterates the index elements.
 * while loop
 * do while loop
 */
//  for (let i =1; i<=5;i++){
//      console.log("Hello Everyone.."+ i);
//  }
var values = [10, 20, 30, 40, 50];
for (var i = 0; i < values.length; i++) {
    console.log(values[i]);
}
for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
    var val = values_1[_i];
    console.log(val);
}
for (var v1 in values) {
    console.log(v1);
}
