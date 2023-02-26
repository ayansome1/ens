export type LatestNewsType = {
  link?: string;
  news: string;
};

export type DashboardData = {
  latest_news: LatestNewsType[];
};
