import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "../../../../types/products";
import ProductDetails from "@/app/Components/ProductDetails";

interface ProductPageProps {
  params: { slug: string }; // Accept slug from dynamic route
}

// Fetch product details from Sanity
async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      price,
      description,
      discountpercentage,
      productImage {
        asset {
          _ref,
          _type
        }
      },
      tags,
      isNew,
      slug {
        _type,
        current
      }
    }`,
    { slug }
  );
}

// Product page component
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  return <ProductDetails product={product} />;
}