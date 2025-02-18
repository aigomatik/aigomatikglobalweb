import Header from "@/components/layout/header/Header";
import ServiceBanner from "@/components/layout/banner/ServiceBanner";
import ServiceTextSlider from "@/components/containers/service/ServiceTextSlider";
import ServiceItems from "@/components/containers/service/ServiceItems";
// import ServiceNewsletter from "@/components/containers/service/ServiceNewsletter";
import ServiceCraft from "@/components/containers/service/ServiceCraft";
import Review from "@/components/containers/service/Review";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import ServiceFaq from "@/components/containers/service/ServiceFaq";
import HorizontalCounter from "@/components/containers/service/HorizontalCounter";



const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <ServiceBanner />
        <ServiceTextSlider />
        <ServiceItems />
        <ServiceFaq/>
        {/* <ServiceNewsletter /> */}
        <ServiceCraft />
        <HorizontalCounter />
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
