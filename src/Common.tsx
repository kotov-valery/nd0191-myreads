export type BookType = {
  id: string;
  imageUrl: string;
  title: string;
  authors: string[];
};

export type OnUpdateShelfType = (action: string, book: BookType) => void;

export type BookshelfType = {
  id: number;
  name: string;
  books: BookType[];
  onUpdate: OnUpdateShelfType;
};

export type BackendBookType = {
  id: string;
  title: string;
  authors: string[];
  imageLinks: {
    thumbnail: string;
  };
};
