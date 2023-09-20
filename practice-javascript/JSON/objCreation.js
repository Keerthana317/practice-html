//object
obj1 = {
    firstName: "Keerthana",
    lastName : "Maddi",
    email : "keerthana@gmail.com",
    contact :  9390552312
}
console.log(obj1)
console.log(typeof(obj1))

//JSON
obj2 = {
    "firstName": "Keerthana",
    "lastName" : "Maddi",
    "email" : "keerthana@gmail.com",
    "contact" :   9390552312
}
console.log(obj2)
console.log(typeof(obj2))

var objJSON=JSON.stringify(obj1)
console.log(objJSON)
console.log(typeof(objJSON))
console.log(objJSON.length)

var obj2=JSON.parse(objJSON)
console.log(obj2)
console.log(typeof(obj2))