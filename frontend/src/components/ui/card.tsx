import cn from 'classnames';

interface CardProps {
  title: string;
  children: React.ReactElement;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg bg-white p-6 shadow-card dark:bg-light-dark sm:p-8'
      )}
    >
      <h3 className="mb-6 text-base font-medium uppercase">{title}</h3>
      {children}
    </div>
  );
}
