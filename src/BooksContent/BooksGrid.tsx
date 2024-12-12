import { BookType } from "../Common";
import Book from "./Book";

const BooksGrid = ({ books }: { books: BookType[] }) => {
  return (
    <div className="bookshelf-books">
      <ul className="books-grid">
        {books.map((book: BookType) => {
          return (
            <li key={book.id}>
              <Book book={book} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BooksGrid;
