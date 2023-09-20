//Inheritance
class Parent{

    //properties
    a = 10
    b = 20

    constructor(){
        console.log(this.a, this.b)
    }
}

class Child extends Parent{

    c = 30
    d = 40

    constructor(){
        super()
        console.log(this.c, this.d)
    }

}

new Child()

//Inheritance
class Parent{

    constructor(a, b){
        console.log(a, b)
    }
}

class Child extends Parent{

    constructor(c, d){
        super(10, 20)
        console.log(c, d)
    }

}

new Child(30, 40)