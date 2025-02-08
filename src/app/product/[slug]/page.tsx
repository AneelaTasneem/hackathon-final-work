import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "../../../../types/products";
import ProductDetails from "@/app/Components/ProductDetails";

// ✅ Function to fetch product details by slug
async function getProduct(slug: string): Promise<Product> {
  return await client.fetch(
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
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const products = await client.fetch(
    groq`*[_type == "product"]{ slug }`
  );

  return products.map((product: { slug: { current: string } }) => ({
    slug: product.slug.current,
  }));
}

// ✅ Product page component
interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug); // ✅ Correctly accessing slug

  return <ProductDetails product={product} />;
}
