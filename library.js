class book{
    constructor(title, author, year, available = true){
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }
}
class library{
    constructor(){
        this.books = [];
    }
    addabook(title, author, year){
        const book1 = new book(title, author, year)
        this.books.push(book1);
        
        // console.log(`To add a book : ${book1.title},  author:${book1.author},  year:${book1.year}`);
    }

    borrowabook(title){
        let borrowbook = this.books.find((book) => book.title === title);

        if(!borrowbook) {
            console.log('wrong book, not available')
            return
        }
        if(borrowbook.available){
            borrowbook.available = false;
            console.log('Successful borrowing')
            console.log(`Book borrowed: ${borrowbook.title}, author: ${borrowbook.author}, year:${borrowbook.year}`)
        } else {
            console.log('Book is not available')
        }

        
    }
    returnabook(title){
        let returnbook = this.books.find((book) => book.title === title);

        if(!returnbook) {
            return
        }
        if(!returnbook.available) {
            returnbook.available = true;
            console.log('Thanks for returning the book')
            console.log(`Book returned: ${returnbook.title}`)
        } else {
            console.log('Book was not borrowed')
        }
         
    }

    getallbooks (){
        return this.books
    }
    getallavailablebooks() {
        let getallavailablebooks = this.books.filter((book) => book.available === true)
        return getallavailablebooks

    }
}


const book1 = new library()
book1.addabook("Things Fall Apart", "Chinua Achebe", 1958)
book1.addabook("Alade Sammuel", "The Hot porridge", 2018)
book1.addabook("Ajibola Sailas", "The Cunny Tortoise", 2016)
book1.borrowabook("Things Fall Apart");
 console.log(book1.getallbooks())
 book1.returnabook("Things Fall Apart");
 console.log(book1.getallbooks())