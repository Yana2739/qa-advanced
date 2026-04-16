import { Book } from "./Book.js";

export class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  // getter
  get fileFormat() {
    return this._fileFormat;
  }

  // setter
  set fileFormat(value) {
    if (!value) {
      throw new Error("File format cannot be empty");
    }
    this._fileFormat = value;
  }

  printInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.fileFormat}`
    );
  }

  // Static метод
  static fromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}