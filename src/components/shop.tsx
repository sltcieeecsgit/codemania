"use client";

import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';
import Image from "next/image";
import { ArrowRight, ShoppingBag, Check } from "lucide-react";

interface Product {
  name: string;
  price: string;
  availableSizes: string[];
  frontImage: string;
  backImage: string;
  description: string;
  orderLink: string;
}

const PRODUCTS: Product[] = [
  {
    name: "Codemania v6.0 Official T-Shirt",
    price: "Rs. 2,500",
    availableSizes: ["M", "L", "XL", "XXL"],
    frontImage: "/images/tshirt-front.png",
    backImage: "/images/tshirt-back.png",
    description: "Engineered for tech enthusiasts. This limited-edition jersey features premium breathable fabric with high-density Codemania v6.0 structural prints.",
    orderLink: "https://forms.gle/YOUR_GOOGLE_FORM_LINK"
  }
];

const SHOP = () => {
  return (
    <Wrapper className="py-24 lg:py-40">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center gap-6 mb-24">
        <AnimationContainer animation="fadeUp" delay={0.2}>
          <SectionBadge title="Official Gear" />
        </AnimationContainer>

        <AnimationContainer animation="fadeUp" delay={0.3}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-folkra font-medium !leading-[1.1] text-white">
            Wear the <span className="text-orange-500">Legend</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            Limited edition Codemania v6.0 merchandise designed for those who decode the impossible.
          </p>
        </AnimationContainer>
      </div>

      {/* Product Showcase */}
      <div className="space-y-32">
        {PRODUCTS.map((product, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

            {/* 01. Visual Presentation (Left 7 Columns) */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-8 skew-y-0 group">
              <AnimationContainer animation="fadeRight" delay={0.4}>
                <div className="relative aspect-[3/4] rounded-[2.5rem] bg-neutral-900 border border-white/5 overflow-hidden group-hover:border-orange-500/30 transition-all duration-700 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src={product.frontImage}
                    alt={`${product.name} Front`}
                    fill
                    className="object-contain p-8 scale-90 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 uppercase tracking-widest font-bold">
                    Front View
                  </div>
                </div>
              </AnimationContainer>

              <AnimationContainer animation="fadeRight" delay={0.5}>
                <div className="relative aspect-[3/4] rounded-[2.5rem] bg-neutral-900 border border-white/5 overflow-hidden mt-8 sm:mt-16 group-hover:border-orange-500/30 transition-all duration-700 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src={product.backImage}
                    alt={`${product.name} Back`}
                    fill
                    className="object-contain p-8 scale-90 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 uppercase tracking-widest font-bold">
                    Back View
                  </div>
                </div>
              </AnimationContainer>
            </div>

            {/* 02. Product Specs (Right 5 Columns) */}
            <div className="lg:col-span-5">
              <AnimationContainer animation="fadeLeft" delay={0.6}>
                <div className="p-8 sm:p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-orange-500/10">
                    <ShoppingBag size={120} />
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-folkra font-medium text-white mb-4 leading-tight">
                    {product.name}
                  </h3>

                  <div className="text-4xl font-bold text-orange-500 mb-8 font-folkra">
                    {product.price}
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed mb-10 pb-10 border-b border-white/5">
                    {product.description}
                  </p>

                  <div className="space-y-8">
                    <div>
                      <p className="text-sm font-bold text-white uppercase tracking-[3px] mb-4">Available Sizes</p>
                      <div className="flex gap-3 flex-wrap">
                        {product.availableSizes.map((size) => (
                          <div key={size} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-default transition-all duration-300">
                            {size}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <div className="p-1 rounded-full bg-orange-500/20"><Check className="size-3 text-orange-500" /></div>
                        Premium Cotton Blend (180 GSM)
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <div className="p-1 rounded-full bg-orange-500/20"><Check className="size-3 text-orange-500" /></div>
                        High-Density Screen Print
                      </div>
                    </div>

                    <a
                      href={product.orderLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/order flex items-center justify-center gap-4 w-full bg-white text-black py-5 rounded-[2rem] font-black text-lg hover:bg-orange-500 hover:text-white transition-all duration-500 shadow-xl"
                    >
                      Process Order
                      <ArrowRight className="size-6 group-hover/order:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </AnimationContainer>
            </div>

          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default SHOP;
