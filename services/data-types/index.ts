export interface CategoyTypes {
  _id: string;
  name: string;
  __v: number
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoyTypes
}