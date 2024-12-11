import "./App.css";
import Bookshelf from "./Bookshelf";
import AddBook from "./AddBook";
import { BookType } from "./Common";

const BookList: BookType[] = [
  {
    imageUrl: "/icons/dummy-book.png",
    title: "Book title 1",
    authors: ["Book author 1"],
  },
  {
    imageUrl: "./icons/dummy-book.png",
    title: "Book title 2",
    authors: ["Book author 2"],
  },
];

function App() {
  return (
    <div className="App">
      <h1 className="list-books-title">My Reader</h1>
      <div className="list-books-content">
        <Bookshelf name="Shelf #1" books={BookList} />
        <Bookshelf name="Shelf #2" books={BookList} />
        <Bookshelf name="Shelf #3" books={BookList} />
      </div>
      <AddBook />
    </div>
  );
}

export default App;
