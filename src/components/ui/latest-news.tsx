import cn from 'classnames';
import { TopPoolsData } from '@/data/static/token-data';
// import CurrencySwapIcons from '@/components/ui/currency-swap-icons';
import { CoinList } from '@/components/ui/currency-swap-icons';
import endpoints from '@/api/endpoints';
import { useEffect } from 'react';

interface TopPoolsProps {
  limit?: number;
}

export default function LatestNews({ limit }: TopPoolsProps) {
  const getData = () => {
    fetch(endpoints.dashboard)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // this.setState({
          //   isLoaded: true,
          //   error,
          // });
        }
      );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className={cn(
        'rounded-lg bg-white p-6 shadow-card dark:bg-light-dark sm:p-8'
      )}
    >
      <h3 className="mb-6 text-base font-medium uppercase">Latest News</h3>
      <div className="mb-5 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <span className="col-span-2">Pool</span>
        <span>Volume</span>
      </div>

      {TopPoolsData.slice(0, limit ?? -1).map((pool, index) => {
        let from = pool.from as CoinList;
        let to = pool.to as CoinList;
        return (
          <div
            className="mb-5 flex items-center justify-between text-sm text-gray-900 last:mb-0 dark:text-white"
            key={index}
          >
            <div className="col-span-2 flex items-center gap-2">
              {/* <CurrencySwapIcons from={from} to={to} /> */}
            </div>
            <span>{pool.volume}</span>
          </div>
        );
      })}
    </div>
  );
}
