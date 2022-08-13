let myLibrary = [];

function Book(title,author,pages,read){
    this.title
    this.author
    this.pages
    this.read
    this.info = function(){
        console.log(title,author,pages,read)

    }
}



function tryToAddBook(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

tryToAddBook.prototype = Object.create(Book.prototype)

const theHobbit = new Book("Book")
theHobbit.title = 'The Hobbit'
theHobbit.author = 'J.R.R Tolken'
theHobbit.pages = '259 pages'
theHobbit.read = 'No'
//console.log(theHobbit.info())

function addBookToLibrary(){
    myLibrary.push(theHobbit)
    console.log(myLibrary)
}