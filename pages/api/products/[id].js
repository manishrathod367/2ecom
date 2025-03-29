import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });
    product ? res.status(200).json(product) : res.status(404).json({ error: "Product not found" });
  } else {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
