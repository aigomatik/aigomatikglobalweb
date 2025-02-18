import Header from "@/components/layout/header/Header";
import AboutBanner from "@/components/layout/banner/AboutBanner";
import AboutTextSlider from "@/components/containers/about/AboutTextSlider";
import AboutPoster from "@/components/containers/about/AboutPoster";
import AboutCraft from "@/components/containers/about/AboutCraft";
import AboutOverview from "@/components/containers/about/AboutOverview";
import AboutTool from "@/components/containers/about/AboutTool";
// import Sponsor from "@/components/containers/home-three/Sponsor";
import Review from "@/components/containers/service/Review";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <AboutBanner />
        <AboutTextSlider />
        <AboutPoster />
        <AboutCraft />
        <AboutOverview />
         <AboutTool />
        {/* <Sponsor />  */}
        <Review />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
