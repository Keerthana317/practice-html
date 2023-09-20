var l1 ={
    firstName:"Keerthana",
    lastName:"Maddi",
    f1:function(age,contact){
        console.log(this.firstName,this.lastName)
        console.log(age,contact)
    }
}
console.log(l1)
l1.f1(26,9390552312)

//function borrowing
//call()
l1.f1.call(l1,28,7075572312)

//apply()
l1.f1.apply(l1,30,7075572312)

//bind()
var b=l1.f1.bind(l1,32,7075572312)
b()