import { BackendBookType, BookshelfType, BookType } from "./Common";

const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const parseBookEntry = (entry: BackendBookType) => {
  const authors =
    typeof entry.authors !== "undefined" ? [...entry.authors] : ["Unknown"];
  const imageUrl =
    typeof entry.imageLinks !== "undefined"
      ? entry.imageLinks.thumbnail
      : "N/A";
  return {
    id: entry.id,
    title: entry.title,
    authors: authors,
    imageUrl: imageUrl,
  } as BookType;
};

export const get = (bookId: string) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data.book);

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then((res) => res.json())
    .then((data) => data.books);

export const update = (book: BookType, shelf: BookshelfType) =>
  fetch(`${api}/books/${book.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());

export const search = (query: string, maxResults: number) =>
  fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, maxResults }),
  })
    .then((res) => res.json())
    .then((data) => data.books);
