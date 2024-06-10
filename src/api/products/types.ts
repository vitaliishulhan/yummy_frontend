export interface IProduct {
  id: number;
  name: string;
  price: number;
  categories: ICategory[];
}

export interface ICategory {
  id: number;
  name: string;
}