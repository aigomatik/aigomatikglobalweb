import Header from "@/components/layout/header/Header";
import ServiceSingleBanner from "@/components/layout/banner/ServiceSingleBanner";
import ServiceDetails from "@/components/containers/service/ServiceDetails";
import ServiceJourney from "@/components/containers/service/ServiceJourney";
import ServicePlans from "@/components/containers/service/ServicePlans";
import TechSlider from "@/components/containers/shop/TechSlider";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    // <div className="my-app">
    <div>
      <Header />
      <main>
        <ServiceSingleBanner />
        <ServiceJourney />
        <ServicePlans />
        <ServiceDetails />
        <TechSlider /> 
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
