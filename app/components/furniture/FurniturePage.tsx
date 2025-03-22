// app/furniture/FurniturePage.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/products";

const SEO_KEYWORDS = [
  "2024 furniture trends",
  "luxury home decor Pakistan",
  "premium sofa sets Karachi",
  "modern office chairs Lahore",
  "outdoor furniture Islamabad",
  "affordable furniture packages",
  "best furniture deals 2024",
  "contemporary home furniture",
  "designer furniture collection",
  "sustainable furniture Pakistan"
];

interface FurniturePageProps {
  products: Product[];
}

const FurniturePage = ({ products }: FurniturePageProps) => {
  const [loading, setLoading] = useState(false);

  // Enhanced Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -30 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const hoverVariants = {
    hover: { 
      y: -10,
      rotateZ: 1,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-8">
      {/* SEO Meta Tags (Add to your layout component) */}
      <head>
        <title>Premium Furniture Collection 2024 | Best Home Decor Pakistan</title>
        <meta name="description" content="Discover 2024's top furniture collection featuring premium sofas, ergonomic chairs, luxury outdoor sets, and modern tables. Best prices with free delivery across Pakistan." />
        <meta name="keywords" content={SEO_KEYWORDS.join(", ")} />
        <meta property="og:title" content="2024 Trending Furniture Collection | Pakistan's Premium Home Decor" />
        <meta property="og:description" content="Explore our award-winning furniture range with exclusive designs and best price guarantee. Shop now for special discounts!" />
      </head>

      <AnimatePresence mode="popLayout">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center h-screen"
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut"
              }}
              className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-7xl mx-auto"
          >
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl font-bold text-slate-800 mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              2024 Premium Collection
            </motion.h1>

            {products.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {products.map((product) => (
                  <motion.div
                    key={product._id}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform perspective-1000"
                  >
                    <motion.div
                      variants={hoverVariants}
                      className="relative h-72 bg-gray-100"
                    >
                      <Image
                        src={product.imageUrl}
                        alt={`Buy ${product.name} - Best Price in Pakistan`}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={products.indexOf(product) < 3}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                    </motion.div>

                    <div className="p-6 space-y-4">
                      <h2 className="text-2xl font-bold text-slate-800">
                        {product.name}
                      </h2>
                      <p className="text-slate-600 line-clamp-3 min-h-[72px]">
                        {product.description}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <div className="space-y-1">
                          <span className="text-xl font-bold text-blue-600">
                            {new Intl.NumberFormat("en-PK", {
                              style: "currency",
                              currency: "PKR",
                            }).format(product.price * 0.9)}
                          </span>
                          <span className="block text-sm text-slate-400 line-through">
                            {new Intl.NumberFormat("en-PK", {
                              style: "currency",
                              currency: "PKR",
                            }).format(product.price)}
                          </span>
                        </div>
                        
                        <Link
                          href={`/ContactUs?product=${encodeURIComponent(product.name)}&price=${product.price}`}
                          passHref
                        >
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                          >
                            Buy Now
                          </motion.button>
                        </Link>
                      </div>
                    </div>

                    {/* Discount Badge */}
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      10% OFF
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-slate-600 text-xl"
              >
                <p className="mb-4">No products found. Please check the API connection.</p>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity }}
                  className="text-4xl"
                >
                  🛋️
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FurniturePage;