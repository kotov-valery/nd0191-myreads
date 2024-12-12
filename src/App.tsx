import { Routes, Route, BrowserRouter } from "react-router";
import { createContext, useEffect, useState } from "react";

import "./App.css";
import { BookshelfType, BookType } from "./Common";
import ListBooksContent from "./BooksContent/ListBooksContent";
import SearchBooks from "./SearchBooks";

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

export const SessionContext = createContext([] as BookshelfType[]);

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
    {
      id: -1,
      name: "None",
      books: [],
    },
  ] as BookshelfType[];

  useEffect(() => {
    setCurrentlyReading([...DummyBookList]);
    setWantToRead([...DummyBookList]);
    setFinishedBooks([...DummyBookList]);
  }, []);

  return (
    <div className="app">
      <SessionContext.Provider value={[...Shelves]}>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={<ListBooksContent shelves={Shelves} />}
            ></Route>
            <Route
              path="/search"
              element={<SearchBooks books={[...DummyBookList]} />}
            />
          </Routes>
        </BrowserRouter>
      </SessionContext.Provider>
    </div>
  );
}

export default App;
