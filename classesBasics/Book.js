export class Book {
    constructor(title, author, year) {
      this._title = title;
      this._author = author;
      this._year = year;
    }
  
    // Геттери
    get title() {
      return this._title;
    }
  
    get author() {
      return this._author;
    }
  
    get year() {
      return this._year;
    }
  
    // Сеттери з валідацією
    set title(value) {
      if (!value) {
        throw new Error("Title cannot be empty");
      }
      this._title = value;
    }
  
    set author(value) {
      if (!value) {
        throw new Error("Author cannot be empty");
      }
      this._author = value;
    }
  
    set year(value) {
      if (typeof value !== "number" || value <= 0) {
        throw new Error("Year must be a positive number");
      }
      this._year = value;
    }
  
    printInfo() {
      console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
  
    // Static метод
    static findOldestBook(books) {
      return books.reduce((oldest, current) => {
        return current.year < oldest.year ? current : oldest;
      });
    }
  }