import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/MarketingAgency/common/Breadcrumb";
import ProcessSection from "@/components/MarketingAgency/ProcessSection";
import ServiceSection from "@/components/MarketingAgency/ServiceSection";
import ChooseUsSection from "@/components/MarketingAgency/common/ChooseUsSection";
import TestimonialsSection from "@/components/MarketingAgency/TestimonialSection";
import FooterSection from "@/components/MarketingAgency/FooterSection";
import Header from "@/components/MarketingAgency/common/Header";
import SmoothScroll from "@/components/MarketingAgency/Animation/SmoothScroll";

// all data
import processData from "@/constant/MarketingAgency/process";
import serviceData from "@/constant/MarketingAgency/service";
import chooseUsData from "@/constant/MarketingAgency/common/choose-us";
import testimonialData from "@/constant/MarketingAgency/testimonial";
import footerData from "@/constant/MarketingAgency/footer";

import type { ServicesResponse } from "@/types/api";

export const metadata: Metadata = {
  title: "Services || Mila Group",
  description: "Services || Mila Group",
  keywords: [
    "Averto services page",
    "NextJS services template",
    "agency services overview",
    "service offerings",
    "responsive services layout",
    "SEO optimized services page",
    "digital agency services",
    "startup services showcase",
    "professional service presentation",
    "service features",
    "business services template",
    "modern services page",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Services Page",
  },
};

async function getServices(): Promise<ServicesResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}services`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}

const Home = async (): Promise<ReactElement> => {
  const servicesResponse = await getServices();

  const processData = servicesResponse.services.map((service, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: service.name,
    text: service.description.replace(/<[^>]*>/g, ""),
  }));

  return (
    <div className="body-wrapper body-inner-page">
      <div className="body-marketing-agency">
        <Header />
      </div>
      <SmoothScroll>
        <main>
          <div className="body-marketing-agency">
            <Breadcrumb
              title="SERVICES"
              subTitle="Mila Group"
              pageName="SERVICES"
            />
            <ProcessSection data={processData} />
            {/* <ServiceSection data={serviceData} /> */}
            <ChooseUsSection chooseUSTwo={true} data={chooseUsData} />
            <TestimonialsSection type="v2" data={testimonialData} />
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
