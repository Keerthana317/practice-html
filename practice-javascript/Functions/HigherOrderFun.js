//The function that takes as arguments and returns a function
//function without arguments
f1=function(){
    console.log("outer function")
    return function(){
        console.log("inner function")
    }
}
f  =   f1()//outer function
//child=parent()
f()//inner function


//function with arguments
f1=function(a){
    console.log(a)
    return function(b){
        console.log(a+b)//15
        console.log(a-b)//5
        conaole.log(a*b)//50
    }
}
f=f1(10)
f(5)