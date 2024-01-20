import {ReadType} from "../../../../services/library/models/ReadType";

export interface UserBookModel {
  rating: number;
  liked: boolean;
  startDate: Date;
  finishDate: Date;
  note: string;
  readType: ReadType;
  book: {
    id:number;
    name: string;
    imagePath: string;
    category: {
      name: string;
    };
    authors: {
      id:number;
      name: string
      imagePath: string;
    }[]
  };
}
