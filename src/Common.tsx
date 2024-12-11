export type BookType = {
  imageUrl: string;
  title: string;
  authors: string[];
};

export type BookshelfType = {
  id: number;
  name: string;
  books: BookType[];
};
