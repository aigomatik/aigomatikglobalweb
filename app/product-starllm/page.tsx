import Header from "@/components/layout/header/Header";
import ProductDetailsBanner from "@/components/layout/banner/ProductDetailsBanner";
import StarllmDetails from "@/components/containers/product-starllm/StarllmDetails";
import StarllmFeature from "@/components/containers/product-starllm/StarllmFeature";
// import AttsenseParallaxBg from "@/components/containers/product-attsense/AttsenseParallaxBg";
import RelatedStarllmProduct from "@/components/containers/product-starllm/RelatedStarllmProduct";
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
        <StarllmDetails />
        {/* <AttsenseParallaxBg /> */}
        
        <StarllmFeature />
        <RelatedStarllmProduct />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;

