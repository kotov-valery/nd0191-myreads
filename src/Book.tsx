import BookCover from "./BookCover";
import { BookshelfType, BookType } from "./Common";

const Book = ({
  bookshelf,
  book,
}: {
  bookshelf: BookshelfType;
  book: BookType;
}) => {
  const { imageUrl, title, authors } = book;
  return (
    <div className="book">
      <BookCover bookshelf={bookshelf} imageUrl={imageUrl} />
      <div className="book-title">{title}</div>
      <div className="book-author">{authors.join(",")}</div>
    </div>
  );
};

export default Book;
