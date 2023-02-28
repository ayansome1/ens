export type NewsType = {
  link?: string;
  news: string;
};

export type PodcastType = {
  title: string;
  link: string;
  date: string;
};

export type DashboardData = {
  latest_news: NewsType[];
  featured_domain: string;
  featured_articles: NewsType[];
  top_tweets: string[];
  podcasts: PodcastType[];
};
