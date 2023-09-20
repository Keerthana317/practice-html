obj1 = {
    firstName: "Keerthana",
    lastName : "Maddi",
    email : "keerthana@gmail.com",
    contact :  9390552312
}
console.log(obj1)
console.log(typeof(obj1))

var objJSON=JSON.stringify(obj1)
console.log(objJSON)
console.log(typeof(objJSON))

//replace(old-new)
var r = objJSON.replace("Keerthana","Karthik")
console.log(r)