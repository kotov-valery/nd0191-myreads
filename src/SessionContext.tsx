import type { BookshelfType } from "./Common";

// eslint-disable-next-line
export type OnUpdateBookType = (bookId: string, shelfId: number) => void;

// eslint-disable-next-line
export type FindContainingShelf = (bookId: string) => number;

export type SessionContextType = {
  shelves: BookshelfType[];
  onUpdateBook: OnUpdateBookType;
  findContainingShelf: FindContainingShelf;
};

export const DefaultSessionContextType: SessionContextType = {
  shelves: [],
  onUpdateBook: () => {},
  findContainingShelf: () => -1,
};
