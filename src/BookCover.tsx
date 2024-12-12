import BookshelfSelector from "./BookshelfSelector";

const BookCover = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="book-top">
      <div className="book-cover" style={{ width: 150, height: 180 }}>
        <div
          className="book-cover-title"
          style={{ width: 130, height: 170, backgroundColor: "darkgray" }}
        >
          <img src={imageUrl} alt={imageUrl} />
        </div>
        <BookshelfSelector />
      </div>
    </div>
  );
};

export default BookCover;
