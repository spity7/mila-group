export interface ICounters {
  number: string;
  label: string;
}

export interface IAboutData {
  subtitle: string;
  shapes: string[];
  title: string;
  buttonLink: string;
  buttonText: string;
  counters: ICounters[];
  image: string;
}

const aboutData: IAboutData = {
  subtitle: "Who we are",
  shapes: ["/assets/imgs/shape/shape-32.webp"],
  title:
    "Mila Group believes in the power of design to shape a better future. We create innovative architectural solutions that elevate communities and unlock the full potential of every space.",
  buttonLink: "/marketing-agency/about",
  buttonText: "About Us",
  counters: [
    { number: "100%", label: "Commitment to quality design" },
    { number: "150+", label: "Architectural projects completed" },
    { number: "20+", label: "Skilled architects & designers" },
  ],
  image:
    "/assets/imgs/gallery/projects_images_1762639525686_cam016.1 - Mila2.jpg",
};
export default aboutData;
