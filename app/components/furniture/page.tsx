// app/furniture/page.tsx
import { Product } from "@/types/products";
import FurniturePage from "./FurniturePage";

export default async function Page() {
  // Fetch data on the server side
  const products = await getProducts();

  return <FurniturePage products={products} />;
}

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(
      "https://v2d5om50.api.sanity.io/v1/data/query/production?query=*[_type==\"chairs\" || _type==\"table\" || _type==\"outdoor\" || _type==\"sofa\" || _type==\"sets\"]{_id, name, description, price, \"imageUrl\": image.asset->url, \"slug\": slug.current}"
    );

    if (!res.ok) throw new Error("Failed to fetch");

    const data = await res.json();
    return data.result || [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
