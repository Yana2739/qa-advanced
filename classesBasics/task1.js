import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

// Створення книг
const book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);

book1.printInfo();
book2.printInfo();

// EBook
const ebook1 = new EBook("Clean Code", "Robert Martin", 2008, "PDF");
ebook1.printInfo();

// Використання сеттера
ebook1.fileFormat = "EPUB";
console.log("Updated format:", ebook1.fileFormat);

// Static метод Book
const books = [book1, book2, ebook1];

const oldestBook = Book.findOldestBook(books);
console.log("Oldest book:");
oldestBook.printInfo();

// Static метод EBook
const convertedEBook = EBook.fromBook(book1, "MOBI");
convertedEBook.printInfo();