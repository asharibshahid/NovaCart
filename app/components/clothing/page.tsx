"use client";

import React from "react";
import { motion } from "framer-motion";
import TshirtCard from "../tshirt/page";
import HijabCard from "../hijabs/page";
import HoodieCard from "../Hoddie/page"; // Ensure the path is correct
import Head from "next/head";

const SEO_KEYWORDS = [
  "Buy Hijabs Online",
  "Trendy Tshirts in Pakistan",
  "Premium Hoodies Collection",
  "Best Online Clothing Store 2025",
  "Affordable Hijabs Pakistan",
  "Luxury Tshirts for Men & Women",
  "Winter Hoodies Collection",
  "Modest Fashion Pakistan",
  "Top Clothing Brands Online",
  "Stylish Hijabs and Abayas",
  "Casual Tshirts for Everyday Wear",
  "Trending Hoodies 2025",
  "Online Shopping for Clothes",
  "Best Deals on Hijabs and Tshirts",
  "Pakistani Fashion Trends 2025"
];

const PageClo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* SEO Meta Tags */}
      <Head>
        <title>Best Online Clothing Store in Pakistan | Hijabs, Tshirts, Hoodies</title>
        <meta
          name="description"
          content="Shop the latest collection of Hijabs, Tshirts, and Hoodies in Pakistan. Explore trendy and affordable clothing options for men and women. Best deals on modest fashion and casual wear."
        />
        <meta name="keywords" content={SEO_KEYWORDS.join(", ")} />
        <meta
          property="og:title"
          content="Top Clothing Store in Pakistan | Hijabs, Tshirts, Hoodies 2025"
        />
        <meta
          property="og:description"
          content="Discover the best online shopping experience for Hijabs, Tshirts, and Hoodies in Pakistan. Shop now for exclusive deals and trendy fashion."
        />
        <meta property="og:image" content="/clothing-og-image.jpg" />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Best Online Clothing Store in Pakistan",
              "url": "https://novacart.info",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://novacart.info/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>

      {/* Hijabs Section */}
      <motion.section
        initial={{ opacity: 200, y: 50 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-12 px-4"
      >
        <div className="text-center">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent mb-4"
          >
            Hijabs
          </motion.h1>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1 }}
            className="inline-block h-1 rounded bg-emerald-500"
          />
        </div>
        <div className="mt-8">
          <HijabCard />
        </div>
      </motion.section>

      {/* Tshirts Section */}
      <motion.section
        initial={{ opacity: 200, y: 50 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-12 px-4"
      >
        <div className="text-center">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent mb-4"
          >
            Tshirts
          </motion.h1>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1 }}
            className="inline-block h-1 rounded bg-emerald-500"
          />
        </div>
        <div className="mt-8">
          <TshirtCard />
        </div>
      </motion.section>

      {/* Hoodies Section */}
      <motion.section
        initial={{ opacity: 200, y: 50 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-12 px-4"
      >
        <div className="text-center">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent mb-4"
          >
            Hoodies
          </motion.h1>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1 }}
            className="inline-block h-1 rounded bg-emerald-500"
          />
        </div>
        <div className="mt-8">
          <HoodieCard />
        </div>
      </motion.section>
    </div>
  );
};

export default PageClo;