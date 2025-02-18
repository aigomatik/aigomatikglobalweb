import Header from "@/components/layout/header/Header";
import ProductBanner from "@/components/layout/banner/ProductBanner";
import ProductTextSlider from "@/components/containers/shop/ProductTextSlider";
import ProductSwiper from "@/components/containers/shop/ProductSwiper";
import TechSlider from "@/components/containers/shop/TechSlider";
import WorkProcess from "@/components/containers/shop/WorkProcess";
// import ShopSection from "@/components/containers/shop/ShopSection";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <ProductBanner />
        <ProductTextSlider />
        <ProductSwiper /> 
        <TechSlider /> 
        <WorkProcess />
        {/* <ShopSection /> */}
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
