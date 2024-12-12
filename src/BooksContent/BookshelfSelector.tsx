import { useContext } from "react";
import { SessionContext } from "../App";
import { BookshelfType } from "../Common";

const BookshelfSelector = ({
  parentId,
  bookId,
}: {
  parentId: number;
  bookId: string;
}) => {
  const sessionContext = useContext(SessionContext);

  const header = parentId === -1 ? "Add to..." : "Move to...";

  const parentShelf = sessionContext.findContainingShelf(bookId);

  const selected =
    sessionContext.shelves.find(
      (shelve: BookshelfType) => parentShelf === shelve.id
    )?.name || "None";

  const options = sessionContext.shelves.map((shelve: BookshelfType) => {
    return (
      <option key={shelve.id} value={shelve.name}>
        {shelve.name}
      </option>
    );
  });

  const onHandleChange = (e: any) => {
    const shelf = sessionContext.shelves.find((shelf: BookshelfType) => {
      return (
        e.target.value.trim().toLowerCase() === shelf.name.trim().toLowerCase()
      );
    });
    sessionContext.onUpdateBook(bookId, shelf ? shelf.id : -1);
  };

  return (
    <div className="book-shelf-changer">
      <select value={selected} onChange={onHandleChange}>
        <option disabled={true}>{header}</option>
        {options}
      </select>
    </div>
  );
};

export default BookshelfSelector;
