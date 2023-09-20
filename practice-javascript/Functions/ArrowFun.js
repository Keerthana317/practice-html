//Function without arguments
function f1(){
    console.log("F1 Function")//F1 Function
}
f1()


//Assign function to a variable without arguments
f2=function(){
    console.log("F2 Function")//F2 Function
}
f2()
console.log(typeOf(f2))//Function
console.log(f2)//[Function: f2]


//Arrow function without arguments
f3=()=>{console.log("Arrow function")}//Arrow function
f3()
console.log(typeOf(f3))//Function
console.log(f3)//[Function: f3]




//Function with arguments
function f1(fname,lname){
    console.log("First Name is", fname, "Last Name is",lname)//First Name is Keerthana Last Name is Maddi
    console.log(`First Name is ${fname} Last Name is ${lname}`)
}
f1("Keerthana","Maddi")


//Assign function to a variable with arguments
f2=function(fname,lname){
    console.log("First Name is", fname, "Last Name is",lname)
    console.log(`First Name is ${fname} Last Name is ${lname}`)
}
f2("Keerthana","Maddi")
console.log(typeOf(f2))//Function
console.log(f2)//[Function: f2]


//Arrow function with arguments
f3=(fname,lname)=>{console.log("First Name is", fname, "Last Name is",lname)}//Arrow function
f3("Keerthana","Maddi")
console.log(typeOf(f3))//Function
console.log(f3)//[Function: f3]

f4=(fname,lname)=>`First Name is ${fname} Last Name is ${lname}`
console.log(f4("Keerthana","Maddi"))

