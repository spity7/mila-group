export interface Brand {
  id: number;
  image: string;
}

export interface BrandsData {
  title: string;
  brands: Brand[];
}

const brandsData: BrandsData = {
  title: "300+ Trusted Clients Over Worldwide",
  brands: [
    { id: 1, image: "/assets/imgs/logo/Asset 3B.png" },
    { id: 2, image: "/assets/imgs/logo/Asset 3B.png" },
    { id: 3, image: "/assets/imgs/logo/Asset 3B.png" },
    { id: 4, image: "/assets/imgs/logo/Asset 3B.png" },
    { id: 5, image: "/assets/imgs/logo/Asset 3B.png" },
    { id: 6, image: "/assets/imgs/logo/Asset 3B.png" },
    { id: 7, image: "/assets/imgs/logo/Asset 3B.png" },
    { id: 8, image: "/assets/imgs/logo/Asset 3B.png" },
    { id: 9, image: "/assets/imgs/logo/Asset 3B.png" },
    { id: 10, image: "/assets/imgs/logo/Asset 3B.png" },
  ],
};

export default brandsData;
