import { BookshelfType } from "./Common";

const BookshelfChanger = ({
  header,
  bookshelf,
}: {
  header: string;
  bookshelf: BookshelfType;
}) => {
  const Text = ["Currently reading", "Want to read", "Read", "None"];

  const Options = Text.map((text, index) => {
    if (index === bookshelf.id) {
      return <option selected>{text}</option>;
    }
    return <option>{text}</option>;
  });

  return (
    <div className="book-shelf-changer">
      <select>
        <option disabled={true}>{header}</option>
        {Options}
      </select>
    </div>
  );
};

export default BookshelfChanger;
