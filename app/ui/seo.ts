export const ORG_ID = "relux_electric";
export const WEBSITE_ID = "reluxelectric_franchise";
export const LOGO_URL = "https://reluxelectric.com/logo.png";
export const OG_IMAGE_URL = "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&h=630&fit=crop";

export const jsonLdHtml = (schema: any): string => {
  return JSON.stringify(schema);
};

export const breadcrumbJsonLd = (items: any[]) => {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
};
