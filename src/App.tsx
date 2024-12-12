import { Routes, Route, BrowserRouter } from "react-router";
import { createContext, useState } from "react";

import "./App.css";
import { BookshelfType, BookType, BackendBookType } from "./Common";
import ListBooksContent from "./BooksContent/ListBooksContent";
import SearchBooks from "./SearchBooks";

import * as BooksAPI from "./BooksAPI";

export type OnUpdateBookType = (bookId: string, shelfId: number) => void;
export type FindContainingShelf = (bookId: string) => number;

export type SessionContextType = {
  shelves: BookshelfType[];
  onUpdateBook: OnUpdateBookType;
  findContainingShelf: FindContainingShelf;
};

export const SessionContext = createContext({
  shelves: [],
  onUpdateBook: () => {},
  findContainingShelf: () => -1,
} as SessionContextType);

function App() {
  const [currentlyReading, setCurrentlyReading] = useState([] as BookType[]);
  const [wantToRead, setWantToRead] = useState([] as BookType[]);
  const [finishedBooks, setFinishedBooks] = useState([] as BookType[]);

  // Map<BookId, ShelfId>;
  const booksState = (() => {
    const state = new Map();
    currentlyReading.forEach((book: BookType) => {
      state.set(book.id, 0);
    });
    wantToRead.forEach((book: BookType) => {
      state.set(book.id, 1);
    });
    finishedBooks.forEach((book: BookType) => {
      state.set(book.id, 2);
    });
    return state;
  })();

  const shelves = [
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

  const removeFromShelf = (bookId: string) => {
    if (booksState.has(bookId)) {
      const currentShelf = booksState.get(bookId);
      if (currentShelf === 0) {
        setCurrentlyReading(
          currentlyReading.filter((b: BookType) => b.id !== bookId)
        );
      } else if (currentShelf === 1) {
        setWantToRead(wantToRead.filter((b: BookType) => b.id !== bookId));
      } else if (currentShelf === 2) {
        setFinishedBooks(
          finishedBooks.filter((b: BookType) => b.id !== bookId)
        );
      }
    }
  };

  const addToShelf = (bookId: string, shelfId: number) => {
    if (shelfId === -1) return;

    BooksAPI.get(bookId).then((entry: BackendBookType) => {
      const authors =
        typeof entry.authors !== "undefined" ? [...entry.authors] : ["Unknown"];
      const imageUrl =
        typeof entry.imageLinks !== "undefined"
          ? entry.imageLinks.thumbnail
          : "N/A";
      const newBook = {
        id: entry.id,
        title: entry.title,
        authors: authors,
        imageUrl: imageUrl,
      } as BookType;
      if (shelfId === 0) {
        setCurrentlyReading(currentlyReading.concat(newBook));
      } else if (shelfId === 1) {
        setWantToRead(wantToRead.concat(newBook));
      } else if (shelfId === 2) {
        setFinishedBooks(finishedBooks.concat(newBook));
      }
    });
  };

  const onUpdateBook = (bookId: string, shelfId: number) => {
    removeFromShelf(bookId);
    addToShelf(bookId, shelfId);
  };

  const findContainingShelf = (bookId: string) => {
    if (booksState.has(bookId)) {
      return booksState.get(bookId);
    }
    return -1;
  };

  const sessionContext: SessionContextType = {
    shelves: [...shelves],
    onUpdateBook: onUpdateBook,
    findContainingShelf: findContainingShelf,
  };

  return (
    <div className="app">
      <SessionContext.Provider value={sessionContext}>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={<ListBooksContent shelves={shelves} />}
            ></Route>
            <Route path="/search" element={<SearchBooks />} />
          </Routes>
        </BrowserRouter>
      </SessionContext.Provider>
    </div>
  );
}

export default App;
