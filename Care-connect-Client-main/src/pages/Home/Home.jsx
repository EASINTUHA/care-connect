import React from "react";
import Categories from "../../components/Categories/Categories";
import Places from "../../components/Places/Places";
import Banner from "../../components/Banner/Banner";
import Payment from "../../components/Payment/Payment";
import "./home.css";
import Testimonials from "../../components/Testimonials/Testimonial";
import LeafMap from "../../components/Map/LeafMap";
import ExclusiveDeals from "../../components/ExclusiveDeals/ExclusiveDeals";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import LocalCuisineSection from "../../components/LocalCuisineSection/LocalCuisineSection";
import NewsletterSignup from "../../components/NewsletterSignup/NewsletterSignup";
import Safety from "../../components/Safety/Safety";
// import SocialMediaFeeds from "../../components/SocialMediaFeeds/SocialMediaFeeds";

const Home = () => {
  return (
    <>
      <h1 className="animated-text text-center text-5xl my-2">
      Care Connects
      </h1>
      <Banner />
      <h1 className="animated-text text-center text-3xl mt-8">
        Explore Category
      </h1>
      <h4 className="animated-text text-center text-lg">
        Now you can select your destination by categories
      </h4>
      <Categories />
      <Places />
      <h1 className="animated-text text-center text-3xl mt-20">
        World Some Best Hospital
      </h1>
      <h4 className="animated-text text-center text-lg">
      Global Healthcare Pioneers: Leading the Way in Excellence.
      </h4>
      <ExclusiveDeals />
      <LocalCuisineSection />
      <h1 className="animated-text text-center text-3xl mt-20">
      Reviews from patients
      </h1>
      <h4 className="animated-text text-center text-lg">
        We Believe In Quality trust our world wide services
      </h4>
      <Testimonials />
      <WhyChooseUs />
      <h1 className="animated-text text-center text-3xl mt-20">
        Use our world Map
      </h1>
      <h4 className="animated-text text-center text-lg">
      Discover your ideal healthcare destination and embrace a journey of healing and well-being.
      </h4>
      <LeafMap />
      <h1 className="animated-text text-center text-3xl mt-20">
        Payment Partner
      </h1>
      <h4 className="animated-text text-center text-lg">
        Now you can Pay with our trusted world wide payment services
      </h4>
      <Payment />
      {/* <SocialMediaFeeds /> */}
      <Safety />
      <NewsletterSignup />
    </>
  );
};

export default Home;
