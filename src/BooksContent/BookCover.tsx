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
      <div className="book-cover" style={{ width: 150, height: 180 }}>
        <div
          className="book-cover-title"
          style={{ width: 130, height: 170, backgroundColor: "darkgray" }}
        >
          <img src={imageUrl} alt={imageUrl} />
        </div>
        <BookshelfSelector parentId={parentId} bookId={bookId} />
      </div>
    </div>
  );
};

export default BookCover;
