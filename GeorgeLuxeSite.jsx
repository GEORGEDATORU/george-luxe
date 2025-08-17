
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function GeorgeLuxe() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [viewCart, setViewCart] = useState(false);
  const [checkout, setCheckout] = useState(false);

  const products = [
    {
      id: 1,
      name: "Slim Fit Blazer",
      price: "₦25,000",
      image: "https://images.unsplash.com/photo-1603252110464-5f2e6a1e7cde",
      description:
        "Crafted with precision, the George Luxe Slim Fit Blazer is designed for the modern man who values elegance and confidence. Perfect for business meetings, evening events, and casual occasions.",
      details: ["Material: Premium cotton blend", "Colors: Black, Navy Blue, Grey", "Sizes: S, M, L, XL"],
    },
    {
      id: 2,
      name: "Elegant Satin Dress",
      price: "₦22,000",
      image: "https://images.unsplash.com/photo-1520975918318-3c03d3a4f4b5",
      description:
        "A flowing satin dress designed for sophistication and comfort. Suitable for formal events, parties, and evening wear.",
      details: ["Material: Premium satin", "Colors: Red, Emerald Green, Royal Blue", "Sizes: S, M, L"],
    },
    {
      id: 3,
      name: "Leather Tote Bag",
      price: "₦20,000",
      image: "https://images.unsplash.com/photo-1618354691373-fdd2362d79b4",
      description:
        "A timeless leather tote bag built for elegance and everyday use. Durable, spacious, and stylish.",
      details: ["Material: 100% Genuine Leather", "Colors: Black, Tan", "Dimensions: 40cm x 35cm"],
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + parseInt(item.price.replace(/₦|,/g, "")), 0);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Same content as before */}
    </div>
  );
}
