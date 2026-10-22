export interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  img: string;
  description: string;
  customClass: string;
}

export const projects: PortfolioProject[] = [
  {
    id: 1,
    title: "Spanduk",
    category: "Banner",
    img: "/assets/Banner.jpg",
    description: "Desain spanduk informatif dengan tata letak visual yang hierarkis.",
    customClass: "col-span-1 md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Logo Produk",
    category: "Logo",
    img: "/assets/Logo.jpg",
    description: "Logo ini dirancang fleksibel agar tetap proporsional dan solid.",
    customClass: "",
  },
  {
    id: 3,
    title: "Instagram Story",
    category: "Social Media",
    img: "/assets/Instastory.jpg",
    description: "Membuat desain Instagram Story menyesuaikan kebutuhan klien.",
    customClass: "md:row-span-2",
  },
  {
    id: 4,
    title: "Feeds Instagram",
    category: "Social Media",
    img: "/assets/Feed.jpg",
    description: "Membuat feeds instagram untuk promosi produk atau konten edukatif.",
    customClass: "col-span-1 md:col-span-2",
  },
];

export interface PortfolioVideo {
  id: string;
  title: string;
  publicId: string;
}

export const videos: PortfolioVideo[] = [
  { id: "7", title: "Before Sidang", publicId: "prepare_before__sidang_1080p" },
  { id: "6", title: "Hike", publicId: "curug_1080p" },
  { id: "5", title: "zoo vlog", publicId: "zoo_1080p" },
  { id: "4", title: "Fam Edition", publicId: "fam_edition" },
  { id: "3", title: "Bxchange", publicId: "bxchange_v1_1080p" },
  { id: "2", title: "At tasik", publicId: "attasik_v1" },
  { id: "1", title: "Goes To Tasik", publicId: "goestotasik" },
];
