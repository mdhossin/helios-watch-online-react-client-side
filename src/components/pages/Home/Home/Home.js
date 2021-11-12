import React from "react";
import Footer from "../../../pages/Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import MenWatch from "../MenWatch/MenWatch";
import Services from "../Services/Services";
import ReviewsUser from "./ReviewsUser/ReviewsUser";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services />
      <MenWatch></MenWatch>
      <ReviewsUser></ReviewsUser>
      <Footer></Footer>
    </>
  );
};

export default Home;
