import { useContext } from "react";
import { SessionContext } from "../App";
import { BookshelfType } from "../Common";

const BookshelfSelector = ({ parentId }: { parentId: number }) => {
  const sessionContext = useContext(SessionContext);

  const header = parentId === -1 ? "Add to..." : "Move to...";

  const selected =
    sessionContext.find((shelve: BookshelfType) => parentId === shelve.id)
      ?.name || "None";

  const options = sessionContext.map((shelve: BookshelfType) => {
    return (
      <option key={shelve.id} value={shelve.name}>
        {shelve.name}
      </option>
    );
  });

  return (
    <div className="book-shelf-changer">
      <select value={selected} onChange={() => {}}>
        <option disabled={true}>{header}</option>
        {options}
      </select>
    </div>
  );
};

export default BookshelfSelector;
