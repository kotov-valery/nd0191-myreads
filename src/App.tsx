import "./App.css";
import { BookshelfType, BookType } from "./Common";
import { useEffect, useState } from "react";
import ListBooksContent from "./ListBooksContent";

const DummyBookList: BookType[] = [
  {
    id: 1,
    imageUrl: "./icons/dummy-book.png",
    title: "Book title 1",
    authors: ["Book author 1"],
  },
  {
    id: 2,
    imageUrl: "./icons/dummy-book.png",
    title: "Book title 2",
    authors: ["Book author 2"],
  },
];

function App() {
  const [currentlyReading, setCurrentlyReading] = useState([] as BookType[]);
  const [wantToRead, setWantToRead] = useState([] as BookType[]);
  const [finishedBooks, setFinishedBooks] = useState([] as BookType[]);

  const Shelves = [
    {
      id: 0,
      name: "Currently reading",
      books: [...currentlyReading],
    },
    {
      id: 1,
      name: "Want to read",
      books: [...wantToRead],
    },
    {
      id: 2,
      name: "Read",
      books: [...finishedBooks],
    },
  ] as BookshelfType[];

  useEffect(() => {
    setCurrentlyReading([...DummyBookList]);
    setWantToRead([...DummyBookList]);
    setFinishedBooks([...DummyBookList]);
  }, []);

  return (
    <div className="app">
      <ListBooksContent shelves={Shelves} />
    </div>
  );
}

export default App;
