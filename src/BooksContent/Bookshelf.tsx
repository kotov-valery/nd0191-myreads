import BooksGrid from "./BooksGrid";
import type { BookshelfType } from "../Common";

const Bookshelf = ({ bookshelf }: { bookshelf: BookshelfType }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookshelf.name}</h2>
      <BooksGrid parentId={bookshelf.id} books={bookshelf.books} />
    </div>
  );
};

export default Bookshelf;
