//Nested Object
userDetails={
    firstName:"Keerthana",
    lastName:"Maddi",
    userAddress:{
        job:"IT",
        contact:9390552312
    }
}
console.log(userDetails)
//{
//    firstName:"Keerthana",
//    lastName:"Maddi",
//    userAddress:{
//        job:"IT",
//        contact:9390552312
//    }

console.log(userDetails.firstName+' '+userDetails.lastName)
console.log(userDetails.userAddress.job+' '+userDetails.userAddress.contact)