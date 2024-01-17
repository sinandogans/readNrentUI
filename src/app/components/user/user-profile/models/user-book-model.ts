export interface UserBookModel {
  rating: number;
  liked: boolean;
  startDate: Date;
  finishDate: Date;
  note: string;
  readType: string;
  book: {
    name: string;
    category: {
      name: string;
    };
    authors: {
      name: string
    }[]
  };
}
