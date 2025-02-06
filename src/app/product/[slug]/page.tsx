import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "../../../../types/products";
import ProductDetails from "@/app/Components/ProductDetails";

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

// ✅ Generate static params for preloading valid slugs
export async function generateStaticParams() {
  const products = await client.fetch(
    groq`*[_type == "product"]{ slug }`
  );

  return products.map((product: { slug: { current: string } }) => ({
    slug: product.slug.current,
  }));
}

// ✅ Product page component
export default async function ProductPage({ params }: { params: { slug: string } }) {
  // Await the params slug resolution
  const { slug } = await params;  // Await params before using its value

  const product = await getProduct(slug);

  return <ProductDetails product={product} />;
}
