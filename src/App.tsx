import "./App.css";
import Bookshelf from "./Bookshelf";
import AddBook from "./AddBook";
import { BookType } from "./Common";
import { useEffect, useState } from "react";

const BookList: BookType[] = [
  {
    imageUrl: "./icons/dummy-book.png",
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
  const [currentlyReading, setCurrentlyReading] = useState([] as BookType[]);
  const [wantToRead, setWantToRead] = useState([] as BookType[]);
  const [finishedBooks, setFinishedBooks] = useState([] as BookType[]);

  const AllBooks = {
    currentlyReading: currentlyReading,
    wantToRead: wantToRead,
    finishedBooks: finishedBooks,
  };

  useEffect(() => {
    setCurrentlyReading([...BookList]);
    setWantToRead([...BookList]);
    setFinishedBooks([...BookList]);
  }, []);

  return (
    <div className="App">
      <h1 className="list-books-title">My Reader</h1>
      <div className="list-books-content">
        <Bookshelf
          bookshelf={{
            id: 0,
            name: "Currently reading",
            books: currentlyReading,
          }}
        />
        <Bookshelf
          bookshelf={{ id: 1, name: "Want to read", books: wantToRead }}
        />
        <Bookshelf bookshelf={{ id: 2, name: "Read", books: finishedBooks }} />
      </div>
      <AddBook allBooks={AllBooks} />
    </div>
  );
}

export default App;
