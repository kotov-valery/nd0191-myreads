import Bookshelf from "./Bookshelf";
import AddBook from "./AddBook";
import { BookshelfType } from "./Common";

const ListBooksContent = ({ shelves }: { shelves: BookshelfType[] }) => {
  return (
    <>
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <div className="list-books-content">
        {shelves.map((shelf: BookshelfType) => {
          return <Bookshelf key={shelf.id} bookshelf={shelf} />;
        })}
        <AddBook />
      </div>
    </>
  );
};

export default ListBooksContent;
