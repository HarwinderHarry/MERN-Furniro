import React from "react";
import Banner from "../BannerPage/Banner";
import "./Home.css";
import BrowserRange from "../BrowserRangePage/BrowserRange";
import Product from "../ProductPage/Product";
import CarouselSet from "../CarouselPage/CarouselSet";
import YourSetup from "../YourSetupPage/YourSetup";


const Home = () => {


  return (
    <div id="Homecontainer">
      <section>
        <Banner />
        <BrowserRange />
        <Product />
       <CarouselSet />
       <YourSetup />
      </section>
    </div>
  );
};

export default Home;
