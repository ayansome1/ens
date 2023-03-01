import AnchorLink from '../ui/links/anchor-link';
import Card from '../ui/card';

export default function Newsletter() {
  return (
    <Card title="Newsletter">
      <>
        <div className="mb-6">
          <AnchorLink
            target="_blank"
            href={'https://enshq.beehiiv.com/'}
            className="text-sm tracking-tighter text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            newsletter
          </AnchorLink>
        </div>
      </>
    </Card>
  );
}
