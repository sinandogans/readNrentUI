export interface BookReviewModel {
  id: number;
  text: string;
  username: string;
  comments: {
    id: number;
    text: string;
    username: string;
  }[];
  usersLiked: {
    username: string;
  }[];
}
