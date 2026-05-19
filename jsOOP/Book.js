class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    get title() {
    return this._title;
    }

    set title(value) {
        if (value.length === 0) {
          console.log("Title cannot be empty");
       return;
         }

        this._title = value;
     }

    get author() {
       return this._author;
     }

     set author(value) {
       if (value.length === 0) {
         console.log("Author cannot be empty");
         return;
       }

       this._author = value;
     }

     get year() {
       return this._year;
     }

    set year(value) {
        if (value < 0) {
        console.log("Year cannot be negative");
        return;
        }

        this._year = value;
    }

    printInfo() {
        console.log(
        `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
        );
    }
    static findOldestBook(books) {
    let oldestBook = books[0];

    for (const book of books) {
        if (book.year < oldestBook.year) {
        oldestBook = book;
        }
    }

    return oldestBook;
    }

}
export default Book;