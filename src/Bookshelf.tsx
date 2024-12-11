import Book from "./Book";
import type { BookshelfType, BookType } from "./Common";

const Bookshelf = ({ bookshelf }: { bookshelf: BookshelfType }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelf.name}</h2>
      <div className="bookshelf-books">
        <ul className="books-grid">
          {bookshelf.books.map((book: BookType, index) => {
            return (
              <li key={index}>
                <Book bookshelf={bookshelf} book={book} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Bookshelf;
