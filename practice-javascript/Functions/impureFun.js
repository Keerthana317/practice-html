//Eg.2 :Impure Function
//Impure function can produce differenr outputs for the same inputs due to chnages in the programs state.
n=5
function f2(){
    res=n*nconsole.log(res)
}
n=10
f2()


//Eg.2 :
function login(username, password){
    if(username == "Admin" && password=="Admin"){
        console.log("Login Success")
    }else{
        console.log("Login Failure")
    }
}
login("Admin","Admin")