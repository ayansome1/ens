import endpoints from '@/api/endpoints';
import { rest } from 'msw';

export const handlers = [
  rest.get(endpoints.home, (_req, res, ctx) => {
    return res(
      ctx.json({
        latest_news: [
          {
            news: 'MSW $$$$$ Jump Crypto Just Counter-Exploited the Wormhole Hacker for $140 Million',
            link: 'https://www.google.com',
          },
          {
            news: 'Banks Should Back Deposits From Crypto Customers With Cash: US Agencies',
            link: 'https://www.google.com',
          },
          {
            news: 'Risk-Off Is Back: Crypto, Equities Slide on Persistent Inflation',
            link: 'https://www.google.com',
          },
          {
            news: 'SEC Triggers Billion-dollar ‘Bank Run’ on Binance’s BUSD',
            link: 'https://www.google.com',
          },
        ],
        featured_articles: [
          {
            news: 'This is featured article 1',
            link: 'https://www.google.com',
          },
          {
            news: 'This is featured article 2',
            link: 'https://www.google.com',
          },
          {
            news: 'This is featured article 3',
            link: 'https://www.google.com',
          },
          {
            news: 'This is featured article 4',
            link: 'https://www.google.com',
          },
        ],
        top_tweets: [
          '1616801293112315906',
          '1627541095428116483',
          '1625759839745114113',
        ],
        featured_domain: '🦸🏿‍♂️.eth',
        podcasts: [
          {
            title: 'Ep 10: Community VS ENS DAO | ENS Gods Podcast',
            link: 'https://enshq.xyz/ep-10-community-vs-ens-dao-ens-hq-podcast/',
            date: '20th Feb 2022',
          },
          {
            title:
              'Ep 9: Balaji, Tesla.eth and Fight Over 2523.eth | ENS Gods Podcast',
            link: 'https://enshq.xyz/ep-9-balaji-tesla-eth-and-fight-over-2523-eth-ens-hq-podcast/',
            date: '19th Feb 2022',
          },
        ],
      })
    );
  }),
];
