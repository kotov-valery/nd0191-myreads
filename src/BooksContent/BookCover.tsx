import BookshelfSelector from "./BookshelfSelector";

const BookCover = ({
  parentId,
  bookId,
  imageUrl,
}: {
  parentId: number;
  bookId: string;
  imageUrl: string;
}) => {
  return (
    <div className="book-top">
      <div className="book-cover-title">
        <img className="book-cover" src={imageUrl} alt={bookId} />
        <BookshelfSelector parentId={parentId} bookId={bookId} />
      </div>
    </div>
  );
};

export default BookCover;
