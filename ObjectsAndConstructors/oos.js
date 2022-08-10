/*const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }*/

  function Cat(name,breed,color){
    this.name;
    this.breed;
    this.color;
    this.greeting = function(){
        console.log(`Hello, said ${this.name} the ${this.breed}`)
    }
  }
      
  const cat1 = new Cat('Bertice');
  cat1.name = 'Bertice';
  cat1.breed = 'Cymric';
  cat1.color = 'Grey'

  const cat2 = new Cat('James')
  cat2.name = 'James'
  cat2.breed = 'I dont know'
  cat2.color = 'Black'
  
  