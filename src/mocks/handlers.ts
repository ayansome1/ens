import endpoints from '@/api/endpoints';
import { rest } from 'msw';

export const handlers = [
  rest.get(endpoints.home, (_req, res, ctx) => {
    return res(
      ctx.json({
        latest_news: [
          {
            news: 'Shopify launches suite of blockchain commerce tools for merchants',
            link: 'https://cointelegraph.com/news/shopify-launches-suite-of-blockchain-commerce-tools-for-merchants',
          },
          {
            news: 'State of play: Decentralized domain services reflect on industry progress',
            link: 'https://cointelegraph.com/news/state-of-play-decentralized-domain-services-reflect-on-industry-progress',
          },
          {
            news: 'Vitalik Buterin divulges the ‘largest remaining challenge’ for Ethereum',
            link: 'https://cointelegraph.com/news/vitalik-buterin-divulges-the-largest-remaining-challenge-in-ethereum',
          },
          {
            news: 'Coinbase to hand out ENS usernames to simplify wallet transactions',
            link: 'https://cointelegraph.com/news/coinbase-to-hand-out-ens-usernames-to-simplify-wallet-transactions',
          },
        ],
        featured_articles: [
          {
            news: 'Ethereum Name Service founder reflects as 2 million registration mark nears',
            link: 'https://cointelegraph.com/news/ethereum-name-service-founder-reflects-as-2-million-registration-mark-nears',
          },
          {
            news: 'Amazon.eth ENS domain owner disregards 1M USDC buyout offer on OpenSea',
            link: 'https://cointelegraph.com/news/amazon-eth-ens-domain-owner-disregards-1m-usdc-buyout-offer-on-opensea',
          },
          {
            news: 'Ethereum Name Service registrations surge by 200% amid lower gas fees',
            link: 'https://cointelegraph.com/news/ethereum-name-service-registrations-surge-by-200-amid-lower-gas-fees',
          },
        ],
        top_tweets: [
          '1616801293112315906',
          '1627541095428116483',
          '1625759839745114113',
        ],
        featured_domain: {
          name: '🦸🏿‍♂️.eth',
          link: 'https://www.ens.vision/name/%F0%9F%A6%B8%F0%9F%8F%BF%E2%80%8D%E2%99%82.eth',
        },
        podcasts: [
          {
            title: 'TRAVALA.ETH LOST | THE DAILY ENS REPORT | EPISODE 64',
            link: 'https://www.youtube.com/watch?v=kT-I6vRubyQ',
            date: '15th Mar 2023',
          },
          {
            title:
              'EARLY INVESTOR ENS.VISION - ENS MATTERS PODCAST with ZeroZeroCoins.eth ZZC',
            link: 'https://www.youtube.com/watch?v=8-kbauR1mwE',
            date: '5th Mar 2022',
          },
        ],
      })
    );
  }),
];
