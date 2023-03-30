export type NewsType = {
  link?: string;
  news: string;
};

export type PodcastType = {
  title: string;
  link: string;
  date: string;
};

export type FeaturedDomainType = {
  name: string;
  link: string;
};

export type HomeData = {
  latest_news: NewsType[];
  featured_domain: FeaturedDomainType;
  featured_articles: NewsType[];
  top_tweets: string[];
  podcasts: PodcastType[];
};
