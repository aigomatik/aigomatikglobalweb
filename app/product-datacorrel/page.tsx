import Header from "@/components/layout/header/Header";
import ProductDetailsBanner from "@/components/layout/banner/ProductDetailsBanner";
import DatacorrelDetails from "@/components/containers/product-datacorrel/DatacorrelDetails";
import DatacorrelFeature from "@/components/containers/product-datacorrel/DatacorrelFeature";
// import AttsenseParallaxBg from "@/components/containers/product-attsense/AttsenseParallaxBg";
import RelatedDatacorrelProduct from "@/components/containers/product-datacorrel/RelatedDatacorrelProduct";
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
        <DatacorrelDetails />
        {/* <AttsenseParallaxBg /> */}
        
        <DatacorrelFeature />
        <RelatedDatacorrelProduct />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;

