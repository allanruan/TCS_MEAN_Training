/**
 * default parameters
 */
function getFullName(firstName, lastName='smith'){
    console.log(`${firstName} ${lastName}`)
}
getFullName('king')

getFullName('king','Kochhar')

/**Rest  Parameter */

function add(...numbers){
    var total = 0;
    for(var  a  of  numbers){
        total=total+a;
    }
    console.log(total)
}

add(10,20,30,40,50,22,22,11,11)

console.log("--------------------")

/** Spread  parameter*/
var  odd = [1,3,5,7];
var even = [2,4,6,8];
var combined = [...odd,...even]
console.log(combined)
