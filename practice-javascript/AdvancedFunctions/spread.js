//arrays
l1=[10,20,30]
l2=[40,50,60]
l3=[...l1,...l2]
console.log(l3)//[10,20,30,40,50,60]

//objects
obj1={
    userName:"Keerthana",
    userContact:9390552312

}
obj2={
    userAge:23,
    userAddress:"HYD"

}
obj3={
    ...obj1,
    ...obj2
}
console.log(obj3)
