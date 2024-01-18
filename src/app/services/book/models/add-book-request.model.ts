export interface AddBookRequestModel {
  name: string;
  description: string;
  pages: number;
  publisher: string;
  photo:string;
  publicationDate: Date;
  categoryId: number;
  authorIds: number[];
}
