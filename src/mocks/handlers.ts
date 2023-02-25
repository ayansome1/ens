import endpoints from '@/api/endpoints';
import { rest } from 'msw';

export const handlers = [
  rest.get(endpoints.dashboard, (_req, res, ctx) => {
    return res(
      ctx.json({
        latest_news: [
          {
            news: 'Testing Jump Crypto Just Counter-Exploited the Wormhole Hacker for $140 Million',
            link: 'www.google.com',
          },
          {
            news: 'Banks Should Back Deposits From Crypto Customers With Cash: US Agencies',
            link: 'www.google.com',
          },
          {
            news: 'Risk-Off Is Back: Crypto, Equities Slide on Persistent Inflation',
            link: 'www.google.com',
          },
          {
            news: 'SEC Triggers Billion-dollar ‘Bank Run’ on Binance’s BUSD',
            link: 'www.google.com',
          },
          {
            news: 'BlockFi Accuses Creditors of Being ‘Divorced From Reality',
            link: 'www.google.com',
          },
          {
            news: 'Stablecoin Dominance At 9-Month Low After SEC Targets Binance Dollar',
            link: 'www.google.com',
          },
          {
            news: 'Jump Crypto Just Counter-Exploited the Wormhole Hacker for $140 Million',
            link: 'www.google.com',
          },
          {
            news: 'Banks Should Back Deposits From Crypto Customers With Cash: US Agencies',
            link: 'www.google.com',
          },
          {
            news: 'Risk-Off Is Back: Crypto, Equities Slide on Persistent Inflation',
            link: 'www.google.com',
          },
          {
            news: 'SEC Triggers Billion-dollar Bank Run on Binance BUSD',
            link: 'www.google.com',
          },
          {
            news: 'BlockFi Accuses Creditors of Being Divorced From Reality',
            link: 'www.google.com',
          },
          {
            news: 'Stablecoin Dominance At 9-Month Low After SEC Targets Binance Dollar',
            link: 'www.google.com',
          },
        ],
      })
    );
  }),
];
