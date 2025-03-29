import Products from "../components/Products";
import Image from "next/image";
import Link from "next/link";

import "tailwindcss";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 justify-center text-center">
        <h1 className="text-4xl font-bold justify-center item-center">Welcome to ShopEase</h1>
        <p className="mt-2 text-lg">Find the best products at unbeatable prices</p>
        <Link href="/shop">
          <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-200">
            Shop Now
          </button>
        </Link>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
        <Products />  {/* ✅ This will now show products dynamically */}
      </section>

      {/* Categories */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Shop by Category</h2>
        <div className="flex justify-center gap-6">
          {['Electronics', 'Fashion', 'Home', 'Toys'].map((category) => (
            <div key={category} className="bg-gray-200 p-6 rounded-lg text-center font-semibold cursor-pointer hover:bg-gray-300">
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[1, 2, 3].map((review) => (
            <div key={review} className="bg-white p-6 shadow rounded-lg max-w-sm">
              <p className="text-gray-700">"Great products and fast shipping!"</p>
              <h4 className="mt-2 font-semibold">- Customer {review}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
