import Book from "./Book";
import type { BookType } from "./Common";

const Bookshelf = ({ name, books }: { name: string; books: BookType[] }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <ul className="books-grid">
        {books.map((book: BookType, index: number) => {
          return (
            <li key={index} className="book">
              <Book book={book} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Bookshelf;
