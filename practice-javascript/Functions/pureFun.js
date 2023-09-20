//Eg.1 : Pure Function
//pure function will always produce the same output.It does bot modify any data outside its scope. It doesn't chnage the state of variables.
function f1(){
    n=10
    res=n*n
    console.log(res)
}
f1()


//Eg.2 : Pure Function
function login(username, password){
    if(username == "Admin" && password=="Admin"){
        console.log("Login Success")
    }else{
        console.log("Login Failure")
    }
}
login("Admin","Admin")