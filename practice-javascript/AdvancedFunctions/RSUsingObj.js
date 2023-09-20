obj1={
    userName:"Keerthana",
    userContact:9390552312,
    userAge:23,
    userAddress:"HYD"
}
console.log(obj1)

var {userName,...args}=obj3
console.log(obj3)

obj2={
    ...args
}
console.log(obj2)