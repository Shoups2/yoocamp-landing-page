import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Community from "@/components/Community";
import Features from "@/components/Features";
import ProductDemo from "@/components/ProductDemo";
import Creators from "@/components/Creators";
import Advantages from "@/components/Advantages";
import CTABanner from "@/components/CTABanner";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Community />
        <Features />
        <ProductDemo />
        <Problem />
        <Creators />
        <Advantages />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
