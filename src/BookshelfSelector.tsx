const BookshelfSelector = () => {
  const Text = ["Currently reading", "Want to read", "Read", "None"];

  const Options = Text.map((text, index) => {
    return <option key={index + 1}>{text}</option>;
  });

  return (
    <div className="book-shelf-changer">
      <select>
        <option disabled={true}>Move to...</option>
        {Options}
      </select>
    </div>
  );
};

export default BookshelfSelector;
