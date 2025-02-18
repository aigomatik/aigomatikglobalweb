import Header from "@/components/layout/header/Header";
import ProductDetailsBanner from "@/components/layout/banner/ProductDetailsBanner";
import DioscrmDetails from "@/components/containers/product-dioscrm/DioscrmDetails";
import DioscrmFeature from "@/components/containers/product-dioscrm/DioscrmFeature";
// import AttsenseParallaxBg from "@/components/containers/product-attsense/AttsenseParallaxBg";
import RelatedDioscrmProduct from "@/components/containers/product-dioscrm/RelatedDioscrmProduct";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <ProductDetailsBanner />
        <DioscrmDetails />
        {/* <AttsenseParallaxBg /> */}
        
        <DioscrmFeature />
        <RelatedDioscrmProduct />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;

