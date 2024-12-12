import BookshelfSelector from "./BookshelfSelector";

const BookCover = ({
  bookId,
  imageUrl,
}: {
  bookId: string;
  imageUrl: string;
}) => {
  return (
    <div className="book-top">
      <div className="book-cover-title">
        <img className="book-cover" src={imageUrl} alt={bookId} />
        <BookshelfSelector bookId={bookId} />
      </div>
    </div>
  );
};

export default BookCover;
