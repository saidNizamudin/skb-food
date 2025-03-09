export type PostProps = {
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  date: string;
  _embedded: {
    "wp:featuredmedia": {
      source_url: string;
    }[];
    author: {
      name: string;
    }[];
  };
};

export type DocumentForProcessingProps = {
  id: string;
  tags: string[];
  title: { rendered: string };
  content: { rendered: string };
  _embedded: {
    "wp:featuredmedia": {
      [x: string]: { source_url: string };
    }[];
  };
};

export type PostPerYearProps = {
  [key: string]: PostByYearProps[];
};

export type PostByYearProps = {
  id: string;
  year: string;
  image: string;
  title: string;
  url?: string;
};

export type LatestPostProps = {
  title: { rendered: string };
  slug: string;
  date: string;
  _embedded: {
    "wp:featuredmedia": {
      source_url: string;
    }[];
  };
  categories: number[];
};
