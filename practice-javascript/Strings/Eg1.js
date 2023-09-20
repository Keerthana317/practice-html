userName="NameOne"
console.log(userName)//NameOne
console.log(typeOf(userName))//string
console.log(userName[0])//N

userName[0]="n"
console.log(userName)//immutable it cannot chnage

console.log(userName.toLowerCase())//nameone
console.log(userName.toUpperCase())//NAMEONE

customerName=" M KEERTHANA"
console.log(customerName.length)//12

//removes space from first and last
console.log(customerName.trim()+"A")//M KeerthanaA

customerName=" M KEERTHANA"
console.log(customerName)
console.log(customerName.trimStart())

customerName="M KEERTHANA "
console.log(customerName)
console.log(customerName.trimEnd())

//String is sequence of characters
//String is immutable
//In javascript we can create a strings in two ways
//Using literals and using constructor