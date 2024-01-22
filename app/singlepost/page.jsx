import DesktopNavs from "@/components/DesktopNavs";
import HeroText from "@/components/HeroText";
import SinglePostContainer from "@/components/SinglePostContainer";
import SinglePostImage from "@/components/SinglePostImage";
import Footer from "@/components/footer/Footer";
import user from "@/public/assets/images/user.png";
import singlePost01 from "@/public/assets/images/single-post.png";
import singlePost02 from "@/public/assets/images/single-post-02.png";
import SinglePostTestimonial from "@/components/SinglePostTestimonial";
import SinglePostCard from "@/components/SinglePostCard";
import Ads from "@/components/AdsSection/Ads";

const SinglePost = () => {
  return (
    <>
      <DesktopNavs />
      <SinglePostContainer>
        <HeroText avatar={user} headingStyle={"lg:text-5xl text-2xl"} />
        <SinglePostImage image={singlePost01} />
        <SinglePostTestimonial
          text={
            "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels."
          }
        />
        <SinglePostTestimonial
          text={
            "One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect."
          }
        />

        <SinglePostTestimonial
          text={
            "Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas."
          }
          heading={"Research Your Destination"}
        />

        <SinglePostTestimonial
          text={
            "One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect."
          }
        />

        <SinglePostTestimonial
          text={
            "While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey."
          }
          heading={"Plan Your Itinerary"}
        />

        <SinglePostTestimonial
          text={
            "Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet."
          }
        />

        <SinglePostCard />
        <SinglePostImage image={singlePost02} />
        <Ads />
        <SinglePostTestimonial
          text={
            "Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles."
          }
          heading={"Pack Lightly and Smartly"}
        />
        <SinglePostTestimonial
          text={
            "Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times."
          }
          heading={"Stay Safe and Healthy"}
        />
        <SinglePostTestimonial
          text={
            "One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect."
          }
          heading={"Immerse Yourself in the Local Culture"}
        />
        <SinglePostTestimonial
          text={
            "Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings."
          }
          heading={"PCapture Memories"}
        />
        <SinglePostTestimonial
          text={
            "Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride."
          }
          heading={"Conclusion:"}
        />
      </SinglePostContainer>

      <Footer />
    </>
  );
};

export default SinglePost;
