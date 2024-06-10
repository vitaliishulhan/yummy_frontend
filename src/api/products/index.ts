import { getProducts } from "./getProducts";
import type { 
  IProduct,
  ICategory,
} from './types';

const ProductApi = {
  getProducts,
};

export default ProductApi;

export type {
  IProduct,
  ICategory,
};

