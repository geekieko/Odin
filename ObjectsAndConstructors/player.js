//prototype - another object that original object inherits from

//the original object has access to all of its prototype method and properties

function Student(name,grade){
    this.name = name
    this.grade = grade
}

Student.prototype.sayName = function(){
    console.log(this.name)
}

Student.prototype.goToProm = function(){
    console.log('Eh.. go to prom ?')
}

//Recommended method for ptototypal Inheritance
//Ways of making object inherit prototype from another object
//Object.create

function EighthGrader(name){
    this.name = name
    this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader('Carl')
carl.sayName()
carl.grade