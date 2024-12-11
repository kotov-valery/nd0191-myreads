import BookshelfChanger from "./BookshelfChanger";
import { BookshelfType } from "./Common";

const BookCover = ({
  bookshelf,
  imageUrl,
}: {
  bookshelf: BookshelfType;
  imageUrl: string;
}) => {
  return (
    <div className="book-top">
      <div className="book-cover" style={{ width: 150, height: 180 }}>
        <div
          className="book-cover-title"
          style={{ width: 130, height: 170, backgroundColor: "darkgray" }}
        >
          <img src={imageUrl} alt={imageUrl} />
        </div>
        <BookshelfChanger header="Move to..." bookshelf={bookshelf} />
      </div>
    </div>
  );
};

export default BookCover;
