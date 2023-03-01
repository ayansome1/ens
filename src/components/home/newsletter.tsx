import AnchorLink from '../ui/links/anchor-link';
import Card from '../ui/card';
import Button from '../ui/button';

export default function Newsletter() {
  return (
    <Card title="Newsletter">
      <>
        <div className="mb-6">
          For regular updates, and a lot more on ENS{' '}
          <AnchorLink
            target="_blank"
            href={'https://enshq.beehiiv.com/subscribe'}
          >
            <Button variant="ghost" className="mt-2 xs:mt-3">
              Subscribe
            </Button>
          </AnchorLink>{' '}
          to our newsletter
        </div>
      </>
    </Card>
  );
}
