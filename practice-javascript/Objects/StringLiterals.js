//using object literals as values in another object
//string literals
var firstName="Keerthana"
var lastName="Maddi"

//object literals
var l1={
    fName:firstName,
    lName:lastName
}
console.log(l1)

//we write value directly in next object
var l2={
    firstName,
    lastName
}
console.log(l2)//{firstName:"Keerthana",lastName:"Maddi"}