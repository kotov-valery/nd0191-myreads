import { useState } from "react";
import { Link } from "react-router";

import { BookType } from "./Common";
import BooksGrid from "./BooksContent/BooksGrid";

const SearchBooks = ({ books }: { books: BookType[] }) => {
  const [query, setQuery] = useState("");
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
        <BooksGrid parentId={-1} books={books} />
      </div>
    </div>
  );
};

export default SearchBooks;
