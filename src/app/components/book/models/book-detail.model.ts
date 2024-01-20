export interface BookDetailModel {
  name: string;
  imagePath: string;
  authors:{
    id:number;
    fullName:string;
  }[];
}
