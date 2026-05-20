import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book("Clean Code", "Robert Martin", 2008);

const book2 = new Book(
  "JavaScript: The Good Parts",
  "Douglas Crockford",
  2008
);

book1.printInfo();
book2.printInfo();

const ebook1 = new EBook(
  "JavaScript Patterns",
  "Stoyan Stefanov",
  2010,
  "PDF"
);

ebook1.printInfo();

book1.title = "";

book1.printInfo();

ebook1.fileFormat = "";

ebook1.printInfo();

const books = [book1, book2, ebook1];

const oldestBook = Book.findOldestBook(books);

oldestBook.printInfo();

const convertedEBook = EBook.createFromBook(book1, "EPUB");

convertedEBook.printInfo();