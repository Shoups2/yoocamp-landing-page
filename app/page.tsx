import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveActivity from "@/components/LiveActivity";

import FeaturesTabs from "@/components/FeaturesTabs";
import Highlights from "@/components/Highlights";
import Features from "@/components/Features";

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
        <LiveActivity />

        <FeaturesTabs />
        <Highlights />
        <Features />
        <Monetization />
        <Advantages />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
