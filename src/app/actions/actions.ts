import { Product } from "../../../types/products";

export const addToCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const existingProductIndex = cart.findIndex(
    (item) => item._id === product._id
  );

  if (existingProductIndex > -1) {
    cart[existingProductIndex].inventory += 1;
  } else {
    cart.push({
      ...product,
      inventory: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (productID: string) => {
  let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  cart = cart.filter((item) => item._id !== productID);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const productIndex = cart.findIndex((item) => item._id === productId);

  if (productIndex > -1) {
    cart[productIndex].inventory = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getCartItems = (): Product[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

// actions.ts
export const setCartItemCount = () => {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const totalItems = cart.reduce((total: number, item: Product) => total + item.inventory, 0);
  return totalItems;  // Returning the total item count
};

export const addToWishlist = (product: Product) => {
  const wishlist: Product[] = JSON.parse(localStorage.getItem("wishlist") || "[]");

  if (!wishlist.some((item) => item._id === product._id)) {
    wishlist.push(product);
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export const removeFromWishlist = (productID: string) => {
  let wishlist: Product[] = JSON.parse(localStorage.getItem("wishlist") || "[]");
  wishlist = wishlist.filter((item) => item._id !== productID);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export const getWishlistItems = (): Product[] => {
  return JSON.parse(localStorage.getItem("wishlist") || "[]");
};
