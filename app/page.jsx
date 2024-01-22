import Hero from "@/components/Hero";
import React from "react";
import AdsSection from "@/components/AdsSection/Ads";
import BlogCard from "@/components/BlogCard/BlogCard";
import Footer from "@/components/footer/Footer";
import DesktopNavs from "@/components/DesktopNavs";
import HeroBox from "@/components/HeroBox";

const Home = () => {
  return (
    <>
      <Hero>
        <DesktopNavs />
        <HeroBox />
      </Hero>
      <AdsSection />
      <BlogCard />
      <AdsSection />
      <Footer />
    </>
  );
};

export default Home;
