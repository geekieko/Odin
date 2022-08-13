//Object Constuctors - object that needs to be duplicated e.g. player or inventory
function Player(name,marker){
    this.name,
    this.marker,
    this.sayName = function(){
        console.log(name)
    }
}

// call function with keyword new
const player1 = new Player('steve','X')
const player2 = new Player('jenn','O')
player1.sayName()
player2.sayName()