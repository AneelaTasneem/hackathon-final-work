// 'use client';

// import React, { useState, useEffect } from "react";
// import sanityClient from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";

// const sanity = sanityClient({
//   projectId: "yw3lfa8j",
//   dataset: "production",
//   apiVersion: "2021-09-29",
//   useCdn: true,
// });

// const builder = imageUrlBuilder(sanity);

// const urlFor = (source: string) => builder.image(source).url();

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   discountpercentage: number;
//   productImage: {
//     _type: string;
//     asset: {
//       _ref: string;
//     };
//   };
//   tags: string[];
// }

// const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);

//   const fetchProducts = async () => {
//     try {
//       const query = `*[_type == "product"]{
//         _id,
//         title,
//         price,
//         description,
//         discountPercentage,
//         productImage,
//         tags
//       }`;

//       const data = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.title} added to cart`);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-center text-slate-400 mt-4 mb-4">Data is fetching from API</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="bg-white p-4 shadow-md rounded-md">
//             <Image
//               src={urlFor(product.productImage.asset._ref)}
//               alt={product.title}
//               width={300}
//               height={300}
//             />
//             <h3 className="text-lg font-semibold text-slate-500">{product.title}</h3>
//             <p className="text-sm text-slate-400">{product.description}</p>
//             <p className="text-sm text-slate-400">Price: ${product.price}</p>
//             <p className="text-sm text-slate-400">Discount: {product.discountpercentage}%</p>
//             <p className="text-sm text-slate-400">Tags: {product.tags.join(", ")}</p>
//             <button
//               onClick={() => addToCart(product)}
//               className="bg-slate-500 text-white p-2 rounded-md mt-2"
//             >
//               Add to cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCards;
