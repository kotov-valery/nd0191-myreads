import { useEffect, useState } from "react";
import { Link } from "react-router";

import BooksGrid from "./BooksContent/BooksGrid";
import type { BackendBookType, BookType } from "./Common";

import * as BooksAPI from "./BooksAPI";

const MAX_ENTRIES = 10;

const SearchBooks = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([] as BookType[]);

  useEffect(() => {
    const getBooks = async () => {
      if (query.length === 0) {
        return BooksAPI.getAll();
      }
      return BooksAPI.search(query, MAX_ENTRIES);
    };

    let ignore = false;
    getBooks().then((entries: BackendBookType[]) => {
      if (!ignore) {
        setBooks(entries.map(BooksAPI.parseBookEntry));
      }
      return () => {
        ignore = true;
      };
    });
  }, [query]);

  return (
    <div>
      <div className="search-books-bar">
        <Link to="/" className="close-search"></Link>
        <input
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="search-books-results">
        <BooksGrid books={books} />
      </div>
    </div>
  );
};

export default SearchBooks;
