import Hero from "@/components/Hero";
import React from "react";
import AdsSection from '@/components/AdsSection/Ads'
import BlogCard from "@/components/BlogCard/BlogCard";
import Footer from "@/components/footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <AdsSection />
      <BlogCard />
      <Footer />
    </>
  );
};

export default Home;
