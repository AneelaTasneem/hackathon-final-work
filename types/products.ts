// types/products.ts

export interface ProductImage {
    slice?: unknown; // Use `unknown` instead of `any` for better type safety
    asset: {
      _ref: string;
      _type: string;
    };
  }
  
  export interface Slug {
    _type: 'slug';
    current: string;
  }
  
  export interface Product {
    category: string;
    _id: string;
    title: string;
    price: number;
    description: string;
    discountpercentage: number;
    productImage?: ProductImage; // Optional field
    tags: string[];
    isNew?: boolean; // Optional field
    slug: Slug;
    inventory: number;
  }
  