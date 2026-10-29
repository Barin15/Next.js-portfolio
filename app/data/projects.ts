export type Project = {
  slug: string;
  name: string;
  type: string;
  year: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "form-and-field",
    name: "Form & Field",
    type: "Brand, Digital",
    year: "2026",
    image: "/images/form-and-field.svg",
    imageAlt: "Editorial storefront design for a sustainable homewares brand",
  },
  {
    slug: "goodside",
    name: "Goodside",
    type: "Strategy, Website",
    year: "2025",
    image: "/images/goodside.svg",
    imageAlt: "Bright, welcoming website concept for a neighborhood café",
  },
  {
    slug: "common-ground",
    name: "Common Ground",
    type: "Product, Development",
    year: "2025",
    image: "/images/common-ground.svg",
    imageAlt: "A friendly digital dashboard for a community platform",
  },
];
