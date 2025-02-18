import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import TermsConditions from "@/components/containers/terms-and-conditions/TermsConditions";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <CommonBanner title="Terms And Conditions" />
        <TermsConditions />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
