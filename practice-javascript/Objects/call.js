//call() function borrowing

var l1={
    firstName:"Keerthana",
    lastName:"Maddi",
    f1:function(){
        console.log(this)
        console.log(this.firstNamae,this.lastname)
    }
}
console.log(l1)
l1.f1()

//{firstName:"Keerthana",lastName:"Maddi",f1:[function:f1]}
//Keerthana Maddi
//{firstName:"Keerthana",lastName:"Maddi",f1:[function:f1]}

var l2={
    firstName:"Karthik",
    lastName:"Maddi",
}
l1.f1.call(l2)
console.log(l2)

//{firstName:"Karthik",lastName:"Maddi",f1:[function:f1]}
//Karthik Maddi
//{firstName:"Karthik",lastName:"Maddi",f1:[function:f1]}


var l3={
    firstName:"Latha",
    lastName:"Maddi",
}
l1.f1.call(l3)
console.log(l3)

//{firstName:"Latha",lastName:"Maddi",f1:[function:f1]}
//Latha Maddi
//{firstName:"Latha",lastName:"Maddi",f1:[function:f1]}
