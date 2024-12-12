import BookCover from "./BookCover";
import { BookType } from "../Common";

const Book = ({ parentId, book }: { parentId: number; book: BookType }) => {
  const { imageUrl, title, authors } = book;
  return (
    <div className="book">
      <BookCover parentId={parentId} imageUrl={imageUrl} />
      <div className="book-title">{title}</div>
      <div className="book-author">{authors.join(",")}</div>
    </div>
  );
};

export default Book;
