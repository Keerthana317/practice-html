//spread Operator--arrays
arrayOne=[10,20,30,40]
console.log(arrayOne)

function f1(n1,n2,n3,n4){
    console.log(n1," ",n2," ",n3," ",n4)
}
f1(10,20,30,40)
f1()
f1(...arrayOne)
f1(50,...arrayOne)//50 10 20 30