import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Community from "@/components/Community";
import Features from "@/components/Features";

import Creators from "@/components/Creators";
import Monetization from "@/components/Monetization";
import Advantages from "@/components/Advantages";
import CTABanner from "@/components/CTABanner";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Community />
        <Features />
        <Monetization />
        <Creators />
        <Advantages />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
