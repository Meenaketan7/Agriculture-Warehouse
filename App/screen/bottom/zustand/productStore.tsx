import {create, SetState} from 'zustand';
import {devtools, persist} from 'zustand/middleware';
import axios from 'axios';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type ProductState = {
  products: Product[];
  selectedProduct: Product | null;
  createProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: number) => void;
  getProduct: (productId: number) => void;
  clearFilter: () => void;
  fetchProducts: () => Promise<void>;
};

const ProductStore = (set: SetState<ProductState>) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
      set({ products: response.data });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
  selectedProduct: null,
  createProduct: (product: Product) => {
    set(state => ({products: [...state.products, product]}));
  },

  updateProduct: (product: Product) => {
    set(state => ({
      products: state.products.map(p => (p.id === product.id ? product : p)),
    }));
  },

  deleteProduct: (productId: number) => {
    set(state => ({
      products: state.products.filter(p => p.id !== productId),
    }));
  },

  getProduct: (productId: number) => {
    set(state => ({
      selectedProduct: state.products.find(p => p.id === productId) || null,
    }));
  },

  clearFilter: () => {
    set(state => ({
      selectedProduct: null,
    }));
  },
});

const useProductStore = create<ProductState>(
  devtools(
    persist<ProductState>(ProductStore, {
      name: 'products',
    }),
  ) as any,
);
export default useProductStore;
