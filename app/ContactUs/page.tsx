"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";

interface FormData {
  name: string;
  phone: string;
  address: string;
  addressl2: string;
  city: string;
  country: string;
  product: string;
  price: number;
  id: string;
  quantity: number;
  orderId: string;
  [key: string]: string | number; // Fixed index signature
}

function OrderForm() {
  const searchParams = useSearchParams();
  const selectedProduct = searchParams?.get("product") || "";
  const selectedPrice = parseInt(searchParams?.get("price") || "0", 10);
  const selectedProductId = searchParams?.get("id") || "";

  const deliveryFee = 200;
  const [quantity, setQuantity] = useState(1);
  const totalPrice = selectedPrice * quantity + deliveryFee;

  const generateOrderId = () => {
    return `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    addressl2: "",
    city: "",
    country: "",
    product: selectedProduct,
    price: selectedPrice,
    id: selectedProductId,
    quantity: quantity,
    orderId: generateOrderId(),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      product: selectedProduct,
      price: selectedPrice,
      id: selectedProductId,
      quantity: quantity,
    }));
  }, [selectedProduct, selectedPrice, selectedProductId, quantity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(Math.max(newQuantity, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "0eb265e5-be95-4968-ba9a-19ecc044c1a0",
          ...formData,
          totalPrice: totalPrice,
        }),
      });

      if (response.ok) {
        alert("Order placed successfully!");
        setFormData({
          ...formData,
          name: "",
          phone: "",
          address: "",
          addressl2: "",
          city: "",
          country: "",
          orderId: generateOrderId(),
          quantity: 1,
        });
        setQuantity(1);
      }
    } finally {
      setTimeout(() => setIsSubmitting(false), 3000);
    }
  };

  const handleCancelOrder = () => {
    if (!window.confirm("Cancel this order?")) return;

    const cancellationMessage = `Order Cancellation:\nOrder ID: ${formData.orderId}\nProduct: ${formData.product}\nTotal: ${totalPrice} PKR`;
    window.open(
      `https://wa.me/03212558027?text=${encodeURIComponent(cancellationMessage)}`,
      "_blank"
    );

    setFormData({
      ...formData,
      name: "",
      phone: "",
      address: "",
      addressl2: "",
      city: "",
      country: "",
      orderId: generateOrderId(),
      quantity: 1,
    });
    setQuantity(1);
  };

  const handleWhatsAppClick = () => {
    const message = `Order Details:\nOrder ID: ${formData.orderId}\nProduct: ${formData.product}\nTotal: ${totalPrice} PKR`;
    window.open(
      `https://wa.me/03212558027?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  useEffect(() => {
    gsap.from(".form-container", { opacity: 0, y: 50, duration: 1 });
    gsap.from(".form-field", { opacity: 0, y: 20, stagger: 0.2, duration: 1 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-400 mb-6">
          Order Now <br /> All Over Pakistan
        </h1>
        <div className="w-full max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg form-container">
          <h2 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">
            Enter Your Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "Full Name", name: "name" },
              { label: "Phone Number", name: "phone" },
              { label: "Country", name: "country" },
              { label: "City", name: "city" },
              { label: "Address", name: "address" },
              { label: "Address Line 2 (Optional)", name: "addressl2" },
            ].map((field: { label: string; name: string }) => (
              <div key={field.name} className="form-field">
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {field.label}
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name].toString()}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded-md"
                  required={field.name !== "addressl2"}
                />
              </div>
            ))}

            <div className="form-field">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Quantity
              </label>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded-md"
                required
              />
            </div>

            <div className="text-white text-sm md:text-base form-field">
              <p>📦 Product: {formData.product}</p>
              <p>💰 Price: {formData.price} PKR</p>
              <p>🚚 Delivery: {deliveryFee} PKR</p>
              <p>🧾 Total: {totalPrice} PKR</p>
              <p>🆔 Order ID: {formData.orderId}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 form-field">
              <button
                type="button"
                onClick={handleCancelOrder}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-all flex-1"
              >
                Cancel Order
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-emerald-400 to-indigo-500 text-white py-2 px-4 rounded-md transition-all flex-1 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
                }`}
              >
                {isSubmitting ? "Processing..." : "Send Order"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center form-field">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-all w-full"
            >
              <FaWhatsapp className="text-xl" />
              <span>Message on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderFormPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderForm />
    </Suspense>
  );
}
