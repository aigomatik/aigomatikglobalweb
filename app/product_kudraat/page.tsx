import Header from "@/components/layout/header/Header";
import ProductDetailsBanner from "@/components/layout/banner/ProductDetailsBanner";
import KudraatDetails from "@/components/containers/product_kudraat/KudraatDetails";
import KudraatFeature from "@/components/containers/product_kudraat/KudraatFeature";
// import AttsenseParallaxBg from "@/components/containers/product-attsense/AttsenseParallaxBg";
import RelatedKudraatProduct from "@/components/containers/product_kudraat/RelatedKudraatProduct";
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
        <KudraatDetails />
        {/* <AttsenseParallaxBg /> */}
        
        <KudraatFeature />
        <RelatedKudraatProduct />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;

