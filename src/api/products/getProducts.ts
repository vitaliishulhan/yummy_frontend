import client from "../client";
import { IProduct } from "./types";

export interface IGetProductsResponse {
  pagination: {
    page: number;
    pageSize: number;
    pagesCount: number;
    totalCount: number;
    isNext: boolean;
  };
  products: IProduct[];
}

export const getProducts = (page: number, pageSize: number = 10) => client.get<IGetProductsResponse>('products', {
  params: {
    page,
    pageSize
  },
});
