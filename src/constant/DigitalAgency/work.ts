export interface IProject {
  _id: string;
  name: string;
  status: string;
  description: string;
  location: string;
  thumbnailUrl: string;
  gallery: string[];
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface WorkData {
  sectionSubtitle: string;
  sectionTitle: string;
  viewAllText: string;
  viewAllLink: string;
  projects: IProject[];
}

const workData: WorkData = {
  sectionSubtitle: "Our Projects",
  sectionTitle: "Selected Projects",
  viewAllText: "See All Projects",
  viewAllLink: "/digital-agency/portfolio",
  projects: [
    {
      _id: "1",
      name: "Mila Residence",
      status: "BRANDING",
      description: "",
      location: "",
      thumbnailUrl:
        "/assets/imgs/project/projects_images_1762639523506_cam010.2 - Mila2.jpg",
      gallery: [],
      date: "",
      createdAt: "",
      updatedAt: "",
      __v: 0,
    },
    {
      _id: "2",
      name: "Tyre Residence",
      status: "BRANDING",
      description: "",
      location: "",
      thumbnailUrl:
        "/assets/imgs/project/projects_images_1762639524215_cam013.2 - Mila2.jpg",
      gallery: [],
      date: "",
      createdAt: "",
      updatedAt: "",
      __v: 0,
    },
  ],
};

export default workData;
