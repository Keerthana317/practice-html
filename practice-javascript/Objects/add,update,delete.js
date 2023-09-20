//updating,adding and deleting properties
//string literals
fName="Keerthana"
lName="Maddi"

//object literals
var l1={
    firstName:fName,
    lastName:lName
}
console.log(l1)

//updating
l1.firstName="Karthik"
l1.lastName="Maddi"
console.log(l1)

//Adding
l1.job="IT"
console.log(l1)

//Deleting
delete l1.lastName
console.log(l1)