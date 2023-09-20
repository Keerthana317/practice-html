//Rest operator
function f1(x,y,z){
    console.log(x+y+z)
}
f1(10,20,30)//60

function f2(x,y,z, ...args){
    console.log(x+y+z," and ",...args)
}
f2(10,20,30,40,50)//60 and 40,50

function f3(...args){
    console.log(...args)
}
f3(10,20,30,40,50)//(10,20,30,40,50)

