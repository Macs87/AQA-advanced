import Book from "./Book.js";

class EBook extends Book {

    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }
    get fileFormat() {
    return this._fileFormat;
    } 

    set fileFormat(value) {
        if (value.length === 0) {
        console.log("File format cannot be empty");
        return;
        }

        this._fileFormat = value;
    }
    
    printInfo() {
    console.log(
        `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.fileFormat}`
        );
    }
    
    static createFromBook(book, fileFormat) {
        return new EBook(
            book.title,
            book.author,
            book.year,
            fileFormat
        );
    }
}
export default EBook;