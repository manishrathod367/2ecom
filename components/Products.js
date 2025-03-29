import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products") // Calls your backend API
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="p-4 bg-white shadow rounded">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-blue-600 font-bold">${product.price}</p>
          </div>
        ))
      ) : (
        <p className="text-center col-span-3">Loading products...</p>
      )}
    </div>
  );
}
