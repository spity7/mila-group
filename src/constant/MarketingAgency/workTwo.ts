export interface IProject {
  id: number;
  title: string;
  tags: string[];
  image: string;
  link: string;
}

export interface WorkData {
  sectionSubtitle: string;
  sectionTitle: string;
  viewAllText: string;
  viewAllLink: string;
  projects: IProject[];
}

const workData: WorkData = {
  sectionSubtitle: "Our Portfolio",
  sectionTitle: "Selected works",
  viewAllText: "See All Works",
  viewAllLink: "/marketing-agency/portfolio",
  projects: [
    {
      id: 1,
      title: "Mila Residence",
      tags: ["BRANDING", "MOCKUP"],
      image:
        "/assets/imgs/project/projects_images_1762639523506_cam010.2 - Mila2.jpg",
      link: "/",
    },
    {
      id: 2,
      title: "Tyre Residence",
      tags: ["BRANDING", "MOCKUP"],
      image:
        "/assets/imgs/project/projects_images_1762639524215_cam013.2 - Mila2.jpg",
      link: "/",
    },
    // {
    //   id: 3,
    //   title: "Mobile app design for FitPro agency",
    //   tags: ["BRANDING", "MOCKUP"],
    //   image: "/assets/imgs/project/project-3.webp",
    //   link: "/marketing-agency/portfolio-details",
    // },
    // {
    //   id: 4,
    //   title: "Digital Ad campaign for FlexWear",
    //   tags: ["BRANDING", "MOCKUP"],
    //   image: "/assets/imgs/project/project-4.webp",
    //   link: "/marketing-agency/portfolio-details",
    // },
  ],
};

export default workData;
