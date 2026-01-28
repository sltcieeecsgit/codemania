"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SHOP from "@/components/shop";
import { motion } from "framer-motion";

export default function MerchandisePage() {
    return (
        <main className="w-full min-h-screen bg-[#101010] text-white overflow-x-hidden">
            <Navbar />

            {/* Hero Background Design */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[160px] -z-10" />
            <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] -z-10" />

            <div className="pt-20">
                <SHOP />
            </div>

            <Footer />
        </main>
    );
}
