export type PageEntry = {
  path: string;
  name: string;
  summary: string;
  sections: string[];
  answers: string[];
  topics: string[];
};

export const PAGES: PageEntry[] = [
  {
    path: "/",
    name: "Home",
    summary: "Overview of Relux Electric EV charging network with franchise and business opportunities",
    sections: ["EV charging network", "Business opportunities", "Franchise models"],
    answers: ["What is Relux Electric?", "How can I start an EV charging business?"],
    topics: ["EV charging", "EV charging station", "EV charging franchise", "Relux Electric"],
  },
  {
    path: "/business/franchise",
    name: "EV Charging Station Franchise",
    summary: "Franchise models with investment options: 60KW, 120KW, and 240KW Super Hub",
    sections: ["EV charging franchise models", "Investment & ROI", "Franchise terms"],
    answers: ["How much does an EV charging franchise cost?", "What is the ROI?"],
    topics: ["EV charging franchise", "franchise cost", "ROI calculator", "investment"],
  },
];

export const topicsFor = (path: string): string[] => {
  const page = PAGES.find((p) => p.path === path);
  return page?.topics || [];
};
