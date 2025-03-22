import React from "react";
import TshirtCard from "../tshirt/page";
import HijabCard from "../hijabs/page";
import HoodieCard from "../Hoddie/page";

const PageClo = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto px-4">
        {/* Hijabs Section */}
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-teal-400 mb-4 animate-fade-in">
            Hijabs
          </h1>
          <span className="inline-block h-1 w-24 rounded bg-emerald-500 animate-underline" />
        </div>
        <div className="px-4">
          <HijabCard />
        </div>

        {/* Tshirts Section */}
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-teal-400 mb-4 animate-fade-in">
            Tshirts
          </h1>
          <span className="inline-block h-1 w-24 rounded bg-emerald-500 animate-underline" />
        </div>
        <div className="px-4">
          <TshirtCard />
        </div>

        {/* Hoodies Section */}
        <div className="text-center py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-teal-400 mb-4 animate-fade-in">
            Hoodies
          </h1>
          <span className="inline-block h-1 w-24 rounded bg-emerald-500 animate-underline" />
        </div>
        <div className="px-4">
          <HoodieCard />
        </div>
      </div>

      {/* Animation Styles */}
      
    </div>
  );
};

export default PageClo;
