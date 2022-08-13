//Constructors for Book 
function Book(title,author,pages,read){
    this.title
    this.author
    this.pages
    this.read
    this.info = function(){
        console.log(title,author,pages,read)
    }
}

const theHobbit = new Book('The Hobbit','by J.R.R. Tolkien','295 pages','not read yet')
console.log(theHobbit.info())