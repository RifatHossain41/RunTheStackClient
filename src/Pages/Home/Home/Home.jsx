import React from "react";
import Banner from "../Banner/Banner";
import QuestionBanner from "../QuestionBanner/QuestionBanner";
import ReputationBanner from "../ReputationBanner/ReputationBanner";
import BlogBanner from "../BlogBanner/BlogBanner";
import Footer from "../../Shared/Footer/Footer"
import FlipCard from "../FlipCard/FlipCard";

const Home = () => {
  return (
    <div>
      <Banner />
      <QuestionBanner />
      <ReputationBanner />
      <BlogBanner />
      <Footer />
    </div>
  );
};

export default Home;
