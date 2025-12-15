import { ReactElement } from "react";
import { Metadata } from "next";

import Header from "@/components/MarketingAgency/Header";
import AboutSection from "@/components/MarketingAgency/AboutSection";
import BlogSection from "@/components/MarketingAgency/BlogSection";
import BrandSection from "@/components/MarketingAgency/BrandSection";
import FooterSection from "@/components/MarketingAgency/FooterSection";
import HeroSection from "@/components/MarketingAgency/HeroSection";
import ServiceSection from "@/components/MarketingAgency/ServiceSection";
import TeamSection from "@/components/MarketingAgency/TeamSection";
import TestimonialsSection from "@/components/MarketingAgency/TestimonialSection";
// import WorkSection from "@/components/MarketingAgency/WorkSection";
import SmoothScroll from "@/components/MarketingAgency/Animation/SmoothScroll";
import ProcessSection from "@/components/CreativeAgency/ProcessSection";
import WorkSection from "@/components/DigitalAgency/WorkSection";

export const metadata: Metadata = {
  title: "Mila Group",
  description: "Mila Group",
  keywords: [
    "Averto marketing agency",
    "NextJS marketing template",
    "marketing agency homepage",
    "digital marketing website",
    "SEO optimized marketing site",
    "responsive marketing agency",
    "marketing campaigns showcase",
    "client testimonials",
    "professional marketing template",
    "startup marketing website",
    "marketing services",
    "agency landing page",
    "creative marketing agency",
    "performance marketing",
    "frontend development",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Marketing Agency Page",
  },
};

// all data
import heroData from "@/constant/MarketingAgency/hero";
import aboutData from "@/constant/MarketingAgency/about";
import serviceData from "@/constant/MarketingAgency/service";
// import workData from "@/constant/MarketingAgency/work";
import testimonialData from "@/constant/MarketingAgency/testimonial";
import brandsData from "@/constant/MarketingAgency/brand";
import teamData from "@/constant/MarketingAgency/team";
import blogData from "@/constant/MarketingAgency/blog";
import footerData from "@/constant/MarketingAgency/footer";
// import processData from "@/constant/CreativeAgency/process";
import workData from "@/constant/DigitalAgency/work";

import type { ServicesResponse, Project } from "@/types/api";

async function getServices(): Promise<ServicesResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}services`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}

async function getProjects(): Promise<{ projects: Project[] }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}projects`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

const Home = async (): Promise<ReactElement> => {
  const servicesResponse = await getServices();
  const projectsResponse = await getProjects();

  // Merge fetched projects into workData
  const updatedWorkData = {
    ...workData,
    projects: projectsResponse.projects,
  };

  const processData = servicesResponse.services.map((service, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: service.name,
    text: service.description.replace(/<[^>]*>/g, ""),
  }));

  return (
    <div className="body-wrapper body-marketing-agency">
      <Header />
      <SmoothScroll>
        <main>
          <HeroSection data={heroData} />
          <AboutSection data={aboutData} />
          {/* <ServiceSection data={serviceData} /> */}
          <ProcessSection data={processData} />
          <WorkSection data={updatedWorkData} />
          {/* <WorkSection data={workData} /> */}
          {/* <TestimonialsSection data={testimonialData} /> */}
          <BrandSection data={brandsData} />
          {/* <TeamSection data={teamData} /> */}
          {/* <BlogSection data={blogData} /> */}
        </main>
        <FooterSection data={footerData} />
      </SmoothScroll>
    </div>
  );
};
export default Home;
