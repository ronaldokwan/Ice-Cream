import type { Metadata, ResolvingMetadata } from "next";
import DetailCard from "@/components/DetailCard";
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const product = await getSlug(slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: [
        ...previousImages,
        {
          url: product.thumbnail,
          alt: product.title,
        },
      ],
    },
  };
}

async function getSlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/products/${slug}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  const data = await res.json();
  return data;
}

export default async function Detail({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = await getSlug(slug);
  return (
    <>
      <div className="justify-center items-center">
        <DetailCard product={product.data} />
      </div>
    </>
  );
}
