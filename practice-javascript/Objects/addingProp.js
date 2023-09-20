//adding properties and function to an empty object
l1={

}
console.log(l1)//{}

l1.firstName="keerthana"
l1.lastName="Maddi"
console.log(l1)//{firstName:"Keerthana",lastName:"Maddi"}

f1= function(){
    console.log(l1.firstName,l1.lastName)
}
console.log(l1)//{firstName:"Keerthana",lastName:"Maddi",f1:[function anonymous]}

l1.f1()//Keerthana Maddi