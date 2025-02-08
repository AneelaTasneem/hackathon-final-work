import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "../../../../types/products";
import ProductDetails from "@/app/Components/ProductDetails";
import { Metadata } from "next";

// ✅ Type definition for component props
interface ProductPageProps {
  params: { slug: string };
}

// ✅ Function to fetch product details by slug
async function getProduct(slug: string): Promise<Product | null> {
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
  const products = await client.fetch(groq`*[_type == "product"]{ slug }`);
  return products.map((product: { slug: { current: string } }) => ({
    slug: product.slug.current,
  }));
}

// ✅ Product Page Component (Corrected)
export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails product={product} />;
}

// ✅ Optional: SEO Metadata for better page optimization
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(params.slug);
  return {
    title: product ? product.title : "Product Not Found",
    description: product ? product.description : "This product does not exist.",
  };
}
