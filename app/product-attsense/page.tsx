import Header from "@/components/layout/header/Header";
import ProductDetailsBanner from "@/components/layout/banner/ProductDetailsBanner";
import AttsenseDetails from "@/components/containers/product-attsense/AttsenseDetails";
import AttsenseFeature from "@/components/containers/product-attsense/AttsenseFeature";
// import AttsenseParallaxBg from "@/components/containers/product-attsense/AttsenseParallaxBg";
import RelatedAttsenseProduct from "@/components/containers/product-attsense/RelatedAttsenseProduct";
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
        <AttsenseDetails />
        {/* <AttsenseParallaxBg /> */}
        
        <AttsenseFeature />
        <RelatedAttsenseProduct />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;

