export type SingleLink = {
  title: string;
  link: string;
};

export type GroupLinks = {
  header: string;
  links: SingleLink[];
};

type LinkType = SingleLink | GroupLinks;

export const docs: LinkType[] = [
  {
    title: "Introduction",
    link: "/docs/introduction",
  },
  {
    header: "Guides",
    links: [
      {
        title: "Install",
        link: "/docs/install",
      },
      {
        title: "Usage",
        link: "/docs/usage",
      },
      {
        title: "Settings",
        link: "/docs/settings",
      },
    ],
  },
];
