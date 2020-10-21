function sayHello(name){
    console.log('Hello  ' + name)
    console.log(`hello ${name}`)
}
function getFullName(firstName, lastName){
    console.log(`${firstName}, ${lastName}`)
}
function getFullNameAgain(){
    var  fname  = document.getElementById('firstName').value
    var lname = document.getElementById('lastName').value
    getFullName(fname,lname)
}
// sayHello("King")
// sayHello('Phoenix')
// getFullName('King')
// getFullName('King', 'Phoenix')
// getFullName('King', 'Phoenix','Bahh')
