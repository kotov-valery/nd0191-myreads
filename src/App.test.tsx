import * as BooksAPI from "./BooksAPI";
import { BackendBookType } from "./Common";

test("parse book entry", () => {
  const book = BooksAPI.parseBookEntry({
    id: "01234",
    title: "Some title",
    authors: ["Margaret"],
    imageLinks: {
      thumbnail: "URL",
    },
  } as BackendBookType);
  expect(book.id).toBe("01234");
  expect(book.title).toBe("Some title");
  expect(book.authors).toStrictEqual(["Margaret"]);
  expect(book.imageUrl).toBe("URL");
});
