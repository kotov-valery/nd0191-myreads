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

const CURRENTLY_READING = 0;
const WANT_TO_READ = 1;
const FINISHED_BOOKS = 2;
const NOT_ON_A_SHELF = -1;

export const SessionContext = createContext({
  shelves: [],
  onUpdateBook: () => {},
  findContainingShelf: () => -1,
} as SessionContextType);

function App() {
  const [currentlyReading, setCurrentlyReading] = useState([] as BookType[]);
  const [wantToRead, setWantToRead] = useState([] as BookType[]);
  const [finishedBooks, setFinishedBooks] = useState([] as BookType[]);

  // Map<BookId, BookType>
  const [cachedBooks, setCachedBooks] = useState(new Map());

  // Map<BookId, ShelfId>;
  const booksState = (() => {
    const state = new Map();
    currentlyReading.forEach((book: BookType) => {
      state.set(book.id, CURRENTLY_READING);
    });
    wantToRead.forEach((book: BookType) => {
      state.set(book.id, WANT_TO_READ);
    });
    finishedBooks.forEach((book: BookType) => {
      state.set(book.id, FINISHED_BOOKS);
    });
    return state;
  })();

  const onUpdateShelf = (
    action: string,
    book: BookType,
    books: BookType[],
    setValue: any
  ) => {
    if (action === "add") {
      setValue(books.concat(book));
    } else if (action === "remove") {
      setValue(books.filter((b: BookType) => b.id !== book.id));
    }
  };

  const shelves = [
    {
      id: CURRENTLY_READING,
      name: "Currently reading",
      books: currentlyReading,
      onUpdate: (action: string, book: BookType) => {
        onUpdateShelf(action, book, currentlyReading, setCurrentlyReading);
      },
    },
    {
      id: WANT_TO_READ,
      name: "Want to read",
      books: wantToRead,
      onUpdate: (action: string, book: BookType) => {
        onUpdateShelf(action, book, wantToRead, setWantToRead);
      },
    },
    {
      id: FINISHED_BOOKS,
      name: "Read",
      books: finishedBooks,
      onUpdate: (action: string, book: BookType) => {
        onUpdateShelf(action, book, finishedBooks, setFinishedBooks);
      },
    },
    {
      id: NOT_ON_A_SHELF,
      name: "None",
      books: [],
      onUpdate: () => {},
    },
  ] as BookshelfType[];

  const removeFromShelf = (bookId: string) => {
    if (booksState.has(bookId)) {
      const currentShelf = booksState.get(bookId);
      if (currentShelf >= 0 && currentShelf < shelves.length) {
        const book = cachedBooks.get(bookId);
        shelves[currentShelf].onUpdate("remove", book);
      }
    }
  };

  const addToShelf = (bookId: string, shelfId: number) => {
    if (shelfId < 0 || shelfId >= shelves.length) return;

    if (cachedBooks.has(bookId)) {
      const book = cachedBooks.get(bookId);
      shelves[shelfId].onUpdate("add", book);
    } else {
      BooksAPI.get(bookId).then((entry: BackendBookType) => {
        const book = BooksAPI.parseBookEntry(entry);
        setCachedBooks(cachedBooks.set(bookId, book));
        shelves[shelfId].onUpdate("add", book);
      });
    }
  };

  const onUpdateBook = (bookId: string, shelfId: number) => {
    removeFromShelf(bookId);
    addToShelf(bookId, shelfId);
  };

  const findContainingShelf = (bookId: string) => {
    return booksState.has(bookId) ? booksState.get(bookId) : -1;
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
