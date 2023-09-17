// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.printProfile = function () {
//       console.log("title:", title);
//       console.log("author:", author);
//       console.log("year:", year);
//   }
// }

class Book{
  constructor(Title, author, year) {
    this.Title = Title;
    this.Author = this.Authoruthor;
    this.Year = year;
  }
  getDetails() {
    console.log("Title:", this.Title);
    console.log("Author:", this.Author);
    console.log("Year:", this.Year);
  }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

// console.log(book1.getDetails());


const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960)

console.log(book2.getDetails());

// console.log(book2)

// console.log(book1)