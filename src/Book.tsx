import { BookType } from "./Common";

const Book = ({ book }: { book: BookType }) => {
  const { imageUrl, title, authors } = book;
  return (
    <div className="book">
      <img className="book-top" src={imageUrl} alt={title} />
      <p className="book-title">{title}</p>
      <span className="book-authors">{authors.join(",")}</span>
    </div>
  );
};

export default Book;
