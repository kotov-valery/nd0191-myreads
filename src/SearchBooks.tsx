import { useState } from "react";
import { BookType } from "./Common";
import BooksGrid from "./BooksContent/BooksGrid";

const SearchBooks = ({ books }: { books: BookType[] }) => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <div className="search-books-bar">
        <div className="close-search"></div>
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
