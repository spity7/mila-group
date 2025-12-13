import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/MarketingAgency/common/Breadcrumb";
import ChooseUsSection from "@/components/MarketingAgency/common/ChooseUsSection";
import ContactMetaSection from "@/components/MarketingAgency/Contact/ContactMetaSection";
import ContactSection from "@/components/MarketingAgency/Contact/ContactSection";
import Header from "@/components/MarketingAgency/common/Header";
import FooterSection from "@/components/MarketingAgency/FooterSection";
import SmoothScroll from "@/components/MarketingAgency/Animation/SmoothScroll";

// all data
import footerData from "@/constant/MarketingAgency/footer";
import contactData from "@/constant/MarketingAgency/Contact/contact";
import chooseUsData from "@/constant/MarketingAgency/common/choose-us";

export const metadata: Metadata = {
  title: "Contact || Mila Group",
  description: "Contact || Mila Group",
  keywords: [
    "Averto contact page",
    "NextJS contact template",
    "agency contact",
    "business contact page",
    "get in touch",
    "contact form NextJS",
    "digital agency contact",
    "startup contact page",
    "professional contact page",
    "customer support",
    "contact details",
    "business inquiries",
    "NextJS contact form",
    "responsive contact page",
    "contact us",
    "contact page template",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Contact Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <div className="body-marketing-agency">
        <Header />
      </div>
      <SmoothScroll>
        <main>
          <div className="body-marketing-agency">
            <Breadcrumb
              title="CONTACT US"
              subTitle="Mila Group"
              pageName="CONTACT"
            />
          </div>
          <ContactMetaSection />
          <div className="body-marketing-agency">
            <ContactSection data={contactData} />
            <ChooseUsSection chooseUSTwo={true} data={chooseUsData} />
          </div>
        </main>
        <div className="body-marketing-agency">
          <FooterSection data={footerData} />
        </div>
      </SmoothScroll>
    </div>
  );
};
export default Home;
