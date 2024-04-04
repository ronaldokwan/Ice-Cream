import Products from "@/db/models/products";

export async function GET() {
  const data = await Products.findAll();

  return Response.json(
    { data, message: "GET products success" },
    { status: 200 }
  );
}
