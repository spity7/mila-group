import { ReactElement } from "react";
import { Metadata } from "next";
import SmoothScroll from "@/components/DigitalAgency/Animation/SmoothScroll";
import Breadcrumb from "@/components/DigitalAgency/common/Breadcrumb";
import Header from "@/components/MarketingAgency/common/Header";
import FooterSection from "@/components/MarketingAgency/FooterSection";
import PortfolioDetails from "@/components/DigitalAgency/PortfolioDetails/PortfolioDetails";
import PortfolioSliderSection from "@/components/DigitalAgency/PortfolioDetails/PortfolioSliderSection";

// all data
// import portfolioDetailsData from "@/constant/DigitalAgency/PortfolioDetails/portfolio-details-data";
import portfolioSliderData from "@/constant/DigitalAgency/PortfolioDetails/portfolio-data";
import footerData from "@/constant/MarketingAgency/footer";
import { IPortfolioDetailsData } from "@/constant/DigitalAgency/PortfolioDetails/portfolio-details-data";

async function getProject(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}projects/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch project");
    }

    return res.json();
}

async function getProjects() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}projects`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch projects");
    }

    return res.json();
}

export const metadata: Metadata = {
    title:
        "Mila Group",
    description:
        "Mila Group",
    keywords: [
        "Averto portfolio details",
        "NextJS portfolio details template",
        "project case study",
        "detailed portfolio page",
        "creative project insights",
        "responsive portfolio details",
        "SEO optimized project page",
        "digital agency portfolio details",
        "startup project showcase",
        "professional portfolio layout",
        "frontend developer case study",
        "technology showcase",
        "creative process display",
        "modern portfolio details page",
    ],
    creator: "PixaVation",
    other: {
        developer: "PixaVation",
        section: "Portfolio Details Page",
    },
};

type Props = {
    params: { id: string };
};

const PortfolioDetailsPage = async ({ params }: Props): Promise<ReactElement> => {
    const { project } = await getProject(params.id);
    const projectsData = await getProjects();
    const relatedProjects = projectsData.projects.filter(
        (p: any) => p._id !== project._id
    );

    const projectDetailsData: IPortfolioDetailsData = {
        meta: [
            { title: "Project", text: project.name },
            { title: "Status", text: project.status },
            { title: "Location", text: project.location },
            { title: "Date", text: new Date(project.date).toLocaleDateString() },
        ],
        overview: {
            title: "Overview",
            content: project.description,
            images: project.gallery,
        },
        problems: {
            title: "",
            paragraphs: [],
            images: [],
        },
        solutions: {
            title: "",
            paragraphs: [],
        },
    };
    return (
        <div className="body-wrapper body-inner-page">
            <Header />
            <SmoothScroll>
                <main>
                    <Breadcrumb
                        title={project?.name || "Mila Group"}
                        subTitle="Mila Group"
                        pageName={project?.name || "Mila Group"}
                    />
                    <PortfolioDetails data={projectDetailsData} />
                    <PortfolioSliderSection data={relatedProjects} />
                </main>
                <FooterSection data={footerData} />
            </SmoothScroll>
        </div>
    );
};
export default PortfolioDetailsPage;
