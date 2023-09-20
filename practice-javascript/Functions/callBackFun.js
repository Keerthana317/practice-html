//Call back function that is passed as argument to another function and invoked in another function.
function f1(firstName, lastName){
    console.log(firstName+" "+lastName)
}
//f1("Keerthana","Maddi")


function f2(firstName, lastName){
     //key = value
     fName=firstName
     lName=lastName
     f1(fName,lName)
}

f2("Keerthana","Maddi")
f2("Karthik","Maddi")