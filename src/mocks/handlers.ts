import endpoints from '@/api/endpoints';
import { rest } from 'msw';

export const handlers = [
  rest.get(endpoints.dashboard, (_req, res, ctx) => {
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
          {
            news: 'BlockFi Accuses Creditors of Being ‘Divorced From Reality',
            link: 'https://www.google.com',
          },
          {
            news: 'Stablecoin Dominance At 9-Month Low After SEC Targets Binance Dollar',
            link: 'https://www.google.com',
          },
          {
            news: 'Jump Crypto Just Counter-Exploited the Wormhole Hacker for $140 Million',
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
            news: 'SEC Triggers Billion-dollar Bank Run on Binance BUSD',
            link: 'https://www.google.com',
          },
          {
            news: 'BlockFi Accuses Creditors of Being Divorced From Reality',
            link: 'https://www.google.com',
          },
          {
            news: 'Stablecoin Dominance At 9-Month Low After SEC Targets Binance Dollar',
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
          'link1',
          'link2',
          // '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Gm Web3!!<br>The best degen always win! 🥲🤣🚀<a href="https://twitter.com/hashtag/web3?src=hash&amp;ref_src=twsrc%5Etfw">#web3</a> <a href="https://twitter.com/hashtag/bns?src=hash&amp;ref_src=twsrc%5Etfw">#bns</a> <a href="https://twitter.com/hashtag/ens?src=hash&amp;ref_src=twsrc%5Etfw">#ens</a> <a href="https://twitter.com/hashtag/btc?src=hash&amp;ref_src=twsrc%5Etfw">#btc</a>    <a href="https://twitter.com/hashtag/eth?src=hash&amp;ref_src=twsrc%5Etfw">#eth</a> <a href="https://t.co/rbZlQU0Slg">pic.twitter.com/rbZlQU0Slg</a></p>&mdash; euros.btc | abu.btc | vip77.eth (@bc155555) <a href="https://twitter.com/bc155555/status/1630526224744448001?ref_src=twsrc%5Etfw">February 28, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          // '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Gm Kings &amp; Queens.<br><br>Last Taco Tuesday of February<br><br>Legend Wdy for tonight&#39;s lunch / dinner ? <a href="https://t.co/GmiWDfXDJt">pic.twitter.com/GmiWDfXDJt</a></p>&mdash; Chanimal 🍌 🟠⛏️🤌⚽️🥷 (@JaysonCrypto) <a href="https://twitter.com/JaysonCrypto/status/1630542833596899328?ref_src=twsrc%5Etfw">February 28, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
        ],
        featured_domain: '8080.eth',
        podcasts: [
          {
            title: 'Ep 10: Community VS ENS DAO | ENS HQ Podcast',
            link: 'https://enshq.xyz/ep-10-community-vs-ens-dao-ens-hq-podcast/',
            date: '20th Feb 2022',
          },
          {
            title:
              'Ep 9: Balaji, Tesla.eth and Fight Over 2523.eth | ENS HQ Podcast',
            link: 'https://enshq.xyz/ep-9-balaji-tesla-eth-and-fight-over-2523-eth-ens-hq-podcast/',
            date: '19th Feb 2022',
          },
        ],
      })
    );
  }),
];
