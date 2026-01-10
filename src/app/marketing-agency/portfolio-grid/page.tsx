import { Metadata } from "next";
import { ReactElement } from "react";
import Breadcrumb from "@/components/MarketingAgency/common/Breadcrumb";
import WorkSection from "@/components/MarketingAgency/WorkTwoSection";
import FooterSection from "@/components/MarketingAgency/FooterSection";
import Header from "@/components/MarketingAgency/common/Header";
import SmoothScroll from "@/components/MarketingAgency/Animation/SmoothScroll";

// all data
import footerData from "@/constant/MarketingAgency/footer";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects || Mila Group",
  description: "Projects || Mila Group",
  keywords: [
    "Averto portfolio grid",
    "NextJS portfolio grid template",
    "creative portfolio grid",
    "responsive portfolio layout",
    "SEO optimized portfolio grid",
    "digital agency portfolio grid",
    "startup portfolio showcase",
    "project gallery",
    "professional portfolio grid",
    "modern portfolio display",
    "frontend developer portfolio",
    "creative work grid",
    "NextJS project grid",
    "grid based portfolio",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Portfolio Grid Page",
  },
};

const Home = async (): Promise<ReactElement> => {
  const { projects } = await getProjects();

  const workData = {
    sectionSubtitle: "Our Portfolio",
    sectionTitle: "Selected works",
    viewAllText: "See All Works",
    viewAllLink: "/marketing-agency/portfolio",
    projects: projects.map((item) => ({
      id: item._id,
      title: item.name, // ✅ backend name
      image: item.thumbnailUrl, // ✅ backend thumbnail
      tags: [item.status], // optional
      link: `/digital-agency/portfolio-details/${item._id}`, // ✅ correct route
    })),
  };

  return (
    <div className="body-wrapper body-inner-page">
      <div className="body-marketing-agency">
        <Header />
      </div>
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="PROJECTS"
            subTitle="Mila Group"
            pageName="Projects"
          />
          <WorkSection pageInner={true} type={7} data={workData} />
        </main>
        <div className="body-marketing-agency">
          <FooterSection data={footerData} />
        </div>
      </SmoothScroll>
    </div>
  );
};
export default Home;
