export interface ISocialLinks {
  socialLinks: {
    href: string;
    icon: string;
    active?: boolean;
  }[];
}
export interface IHeroData extends ISocialLinks {
  subtitle: string;
  titleParts: {
    text: string;
    highLight: boolean;
  }[];
  description: string;
  buttonLink: string;
  buttonText: string;
  backgroundShapes: string[];
}
const heroData: IHeroData = {
  socialLinks: [
    { href: "#", icon: "fa-brands fa-instagram" },
    { href: "#", icon: "fa-brands fa-whatsapp", active: true },
    { href: "#", icon: "fa-brands fa-twitter" },
  ],
  subtitle: "Crafting spaces that inspire",
  titleParts: [
    { text: "Real Estate with ", highLight: false },
    { text: "Purpose", highLight: true },
  ],
  description:
    "Mila Group brings vision to life through innovative architectural design.",
  buttonLink: "/marketing-agency/services",
  buttonText: "Explore Services",
  backgroundShapes: [
    "/assets/imgs/shape/shape-27.webp",
    "/assets/imgs/shape/shape-28.webp",
    "/assets/imgs/shape/shape-31.webp",
    "/assets/imgs/shape/Layer 0.png",
  ],
};

export default heroData;
