import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;
  const productId = Number(id);

  if (isNaN(productId)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }

  if (req.method === "GET") {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } else {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   const { id } = req.query;

//   if (req.method === "GET") {
//     const product = await prisma.product.findUnique({
//       where: { id: parseInt(id) },
//     });
//     product ? res.status(200).json(product) : res.status(404).json({ error: "Product not found" });
//   } else {
//     res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//   }
// }
