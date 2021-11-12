import React from "react";
import Footer from "../../../pages/Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import MenWatch from "../MenWatch/MenWatch";
import Services from "../Services/Services";
import ReviewsUser from "./ReviewsUser/ReviewsUser";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services />
      <MenWatch></MenWatch>
      <Blogs></Blogs>
      <ReviewsUser></ReviewsUser>
      <Footer></Footer>
    </>
  );
};

export default Home;
