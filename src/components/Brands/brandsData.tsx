import { Brand } from "@/types/brand";
import business_1 from "@/assets/empresas/1.png";
import business_2 from "@/assets/empresas/2.png";
import business_3 from "@/assets/empresas/3.png";
import business_4 from "@/assets/empresas/4.png";
import business_5 from "@/assets/empresas/5.png";
import business_6 from "@/assets/empresas/6.png";


const brandsData: Brand[] = [
  {
    id: 6,
    name: "Formbold",
    href: "https://formbold.com",
    image: business_6.src,
    imageLight: business_6.src,
  },
  {
    id: 1,
    name: "UIdeck",
    href: "https://uideck.com",
    image: business_1.src,
    imageLight: business_1.src,
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: business_2.src,
    imageLight: business_2.src,
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: business_3.src,
    imageLight: business_3.src,
  },
  {
    id: 4,
    name: "Tailadmin",
    href: "https://tailadmin.com",
    image: business_4.src,
    imageLight: business_4.src,
  },
  {
    id: 5,
    name: "PlainAdmin",
    href: "https://plainadmin.com",
    image: business_5.src,
    imageLight: business_5.src,
  },
];

export default brandsData;
