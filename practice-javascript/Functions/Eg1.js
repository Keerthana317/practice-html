//Function are used for reuseability
//In javascript we use function as keyword to declare function

//Function without any arguments
function f1(){
    console.log("F1 Function")
}

//Function call
f1()

//Function with arguments
function f2(fname, lanme){
    console.log(fname + " " + lanme)
}

f2("Keerthana", "Maddi")
f2("Karthik", "Maddi")

//Function using return keyword
function f3(a,b){
    return console.log(a+b)
}
f3(10,20)

function f4(a,b){
    c=a+b
    return c
}
console.log(f4(10,20))