import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    await prisma.product.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: "Product deleted" });
  } else {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
