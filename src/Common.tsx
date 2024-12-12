export type BookType = {
  id: string;
  imageUrl: string;
  title: string;
  authors: string[];
};

export type BookshelfType = {
  id: number;
  name: string;
  books: BookType[];
};

export type BackendBookType = {
  id: string;
  title: string;
  authors: string[];
  imageLinks: {
    thumbnail: string;
  };
};
