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
    title: "Flix",
    link: "/docs/introduction",
  },
  {
    header: "Guides",
    links: [
      {
        title: "Settings",
        link: "/docs/settings",
      },
    ],
  },
];
