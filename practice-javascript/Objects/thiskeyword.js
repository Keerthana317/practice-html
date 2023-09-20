//using this keyword refers to the curent object
var l1={
    //properties
    firstName:"Keerthana",
    lastName:"Maddi",

    //function
    display:function(){
        console.log("Direct this:"+this)
        console.log("Calling properties suing this:"+this.firstName+" "+this.lastName)
    }
}
console.log(l1)

//calling function outside the scope of object
l1.display()

//calling properties outside the scope of object
console.log(l1.firstName+" "+l1.lastName)