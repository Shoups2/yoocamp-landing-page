import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Benefits from "@/components/Benefits";
import Community from "@/components/Community";
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

        <Benefits />
        <Community />
        <Features />
        <Monetization />
        <Advantages />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
