import BlogCard from "@/components/BlogCard/BlogCard";
import BreadCrumbs from "@/components/BreadCrumbs";
import Button from "@/components/Button";
import DesktopNavs from "@/components/DesktopNavs";
import Hero from "@/components/Hero";
import HeroText from "@/components/HeroText";
import Footer from "@/components/footer/Footer";
import user from '@/public/assets/images/user.png'

const Blog = () => {
  return (
    <>
      <DesktopNavs />
      <BreadCrumbs />
      <Hero>
        <div className='absolute lg:max-w-[29%] left-3 lg:left-28 md:right-auto bottom-28  right-3 '>
          <HeroText className={'text-white'} avatar={user} />
        </div>
      </Hero>
      <BlogCard />
      <Footer />
    </>
  );
};

export default Blog;
