//basic 1
const cat ={
    name: 'Bertie',
    breed: 'Cymric',
    color: 'white',
    greeting:function(){
        console.log('Meow!');
    }
}

cat[name] = 'Bertie';
cat.greeting();
cat.color = 'black';

