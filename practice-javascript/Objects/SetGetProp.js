//Set and Get properties using . and []
var l1={
    firstName:"Keerthana",
    lastName:"Maddi"
}
console.log(l1)//{firstName:"Keerthana",lastName:"Maddi"}
console.log(l1.firstName,l1.lastName)//Keerthana Maddi
console.log(l1['firstName'],['lastName'])//Keerthana Maddi

l1.job="IT"
console.log(l1.job)//{job:"IT"}

l1.contact=9390552312
console.log(l1.contact)//{contact:9390552312}


console.log(l1)//{firstName:"Keerthana",lastName:"Maddi",job:"IT",contact:9390552312}